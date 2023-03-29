// db auths functions
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	updateProfile,
	User,
	signInWithCredential,
	UserCredential,
	sendPasswordResetEmail,
} from "firebase/auth";
import {
	collection,
	doc,
	DocumentData,
	DocumentReference,
	getDoc,
	getDocs,
	query,
	QueryDocumentSnapshot,
	serverTimestamp,
	setDoc,
	updateDoc,
	where,
} from "firebase/firestore";
import auth from "../../auth";
import { auth as authAdmin } from "../../middlewares/authGuard";
import { db } from "../../db";

// interfaces
import {
	IUserFormData,
	IUserModel,
	IUserSignInResponse,
} from "../../shared-type/user";
import { generateAccessToken } from "../../utils/generateAccessToken";

export default class UserRepository {
	static async signIn({
		email,
		password,
	}: Pick<
		IUserFormData,
		"email" | "password"
	>): Promise<IUserSignInResponse> {
		// will check if there is any user in the firestore with the same email
		const getUser: DocumentData = await UserRepository.getUserByEmail(
			email
		);

		const userCredentials: UserCredential | null = getUser
			? await signInWithEmailAndPassword(auth, email, password)
			: null;

		if (!userCredentials || !userCredentials?.user)
			return {
				user: null,
			};

		const { displayName, email: userEmail, uid: id } = userCredentials.user;

		const token = await userCredentials.user.getIdToken(true);

		// const accessToken = await generateAccessToken(token);

		return {
			user: {
				name: displayName || "",
				email: userEmail || "",
				id,
				accessToken: token,
			},
		};
	}

	// create a new user in auth firebase
	static async signUpAuth({
		name,
		email,
		password,
	}: IUserFormData): Promise<User> {
		const userCredentials = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		await UserRepository.updateWhileSignUp(name);

		const { user } = userCredentials;

		return user;
	}

	// create a new user in firestore
	static async signUp(
		{ name, email }: Pick<IUserFormData, "email" | "name">,
		uid: string
	): Promise<void> {
		const refDoc = doc(db, "users", uid);

		const data = {
			name,
			email,
			timestamp: serverTimestamp(),
		};

		await setDoc(refDoc, data);
	}

	// fogot password
	static async sendPasswordResetEmail(email: string): Promise<void> {
		await sendPasswordResetEmail(auth, email);
	}

	// update a user name while in sign up using auth
	static async updateWhileSignUp(name: string): Promise<void> {
		if (!auth || !auth.currentUser) throw new Error("server error");
		await updateProfile(auth.currentUser, {
			displayName: name,
		});
	}

	// sign up auth with google
	static async signInWithGoogleAuth(id_token: string) {
		const credential = GoogleAuthProvider.credential(id_token);

		const response = await signInWithCredential(auth, credential);

		const { user } = response;

		const docRef = doc(db, "users", user.uid);

		const data = {
			name: user.displayName,
			email: user.email,
			timestamp: serverTimestamp(),
		};

		if (!(await UserRepository.isUserExists(docRef)))
			await setDoc(docRef, data);

		return {
			user: {
				name: user.displayName,
				email: user.email,
				id: user.uid,
				accessToken: await user.getIdToken(),
			},
		};
	}

	// check if there is an user with the same uid
	static async isUserExists(
		docRef: DocumentReference<DocumentData>
	): Promise<boolean> {
		const docSnap = await getDoc(docRef);

		return docSnap.exists();
	}

	// get an user by its email
	static async getUserByEmail(
		email: string
	): Promise<QueryDocumentSnapshot<DocumentData>> {
		const collectionRef = collection(db, "users");

		const q = query(collectionRef, where("email", "==", email));

		const querySnap = await getDocs(q);

		return querySnap.docs[0];
	}

	// update an user profile
	static async updateUserProfile(id: string, name: string) {
		const docRef = doc(db, "users", id);
		await updateDoc(docRef, {
			name,
		});
		const userAuth = await authAdmin.updateUser(id, {
			displayName: name,
		});
		const data = (await getDoc(docRef)).data();
	}

	// get an user by id
	static async getUserById(uid: string) {
		const docRef = doc(db, "users", uid);
		return (await getDoc(docRef)).data();
	}

	// push a new real estate into real estates list at user
	static async pushRealEstate(userUid: string, realEstateUid: string) {
		// get user ref by user's uid
		const docRef = await doc(db, "users", userUid);

		// get user doc
		const user = (await getDoc(docRef)).data() as IUserModel;

		const realEstates = user?.realEstates ? user.realEstates : [];

		realEstates.push(realEstateUid);

		const update = await updateDoc(docRef, {
			realEstates,
		});

		return update;
	}

	// remove a real estate of real estates list of user
	static async removeRealEstate(userUid: string, realEstateUid: string) {
		// get user ref by user's uid
		const docRef = await doc(db, "users", userUid);

		// get user doc
		const user = (await getDoc(docRef)).data() as IUserModel;

		// check if there is a list of real estate
		if (!user.realEstates)
			throw new Error(
				"there's no real estate list attached to that user"
			);

		// filter user's real estate to remove the realEstateUid from the list
		const realEstates = user.realEstates.filter(
			(realEstate) => realEstate !== realEstateUid
		);

		const update = await updateDoc(docRef, {
			realEstates,
		});

		return update;
	}
}
