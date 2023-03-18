// db auths functions
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, User, signInWithCredential, UserCredential, sendPasswordResetEmail } from "firebase/auth";
import { collection, doc, DocumentData, DocumentReference, getDoc, getDocs, Query, query, QueryDocumentSnapshot, QuerySnapshot, serverTimestamp, setDoc, where } from "firebase/firestore";
import auth from "../../auth";
import { db } from "../../db";

// interfaces
import { IUserFormData, IUserServerResponse } from "../../shared-type/user";

export default class UserRepository {
    static async signIn({ email, password }: Pick<IUserFormData, "email" | "password">) {


        // will check if there is any user in the firestore with the same email
        const getUser: DocumentData = await (await UserRepository.getUserByEmail(email));

        const userCredentials: UserCredential | null = !!getUser.length ? await signInWithEmailAndPassword(auth, email, password) : null;

        if (!userCredentials) return {
            user: null,
            success: false,
            message: "",
        }

        const { displayName, email: userEmail, uid } = userCredentials.user;

        if (userCredentials?.user) return {
            user: {
                displayName,
                email: userEmail,
                uid,
            },
            success: true,
        };



    }

    // create a new user in auth firebase
    static async signUpAuth({ name, email, password }: IUserFormData): Promise<User> {

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        UserRepository
        await UserRepository.update(name);
        const { user } = userCredentials;
        return user;
    }

    // create a new user in firestore
    static async signUp({ name, email }: Pick<IUserFormData, "email" | "name">, uid: string) {
        const refDoc = doc(db, "users", uid);

        const data = {
            name,
            email,
            timestamp: serverTimestamp(),
        };

        return await setDoc(refDoc, data);
    }

    // fogot password
    static async fogotPassword(email: string) {

        await sendPasswordResetEmail(auth, email);
        
    }

    // update a user name
    static async update(name: string) {
        if (!auth || !auth.currentUser) throw new Error("server error");
        await updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    // sign up auth with google
    static async signInWithGoogleAuth(id_token: string) {

        const credential = GoogleAuthProvider.credential(
            id_token
        );

        const response = await signInWithCredential(auth, credential);
        console.log("response firebase auth: ", response.user);
        const { user } = response;

        const docRef = doc(db, "users", user.uid);

        const data = {
            name: user.displayName,
            email: user.email,
            timestamp: serverTimestamp(),
        };

        if (!await UserRepository.isUserExists(docRef)) await setDoc(docRef, data);
    }

    // check if there is an user with the same uid
    static async isUserExists(docRef: DocumentReference<DocumentData>): Promise<boolean> {

        const docSnap = await getDoc(docRef);

        return docSnap.exists();
    }

    static async getUserByEmail(email: string): Promise<QueryDocumentSnapshot<DocumentData>[]> {
        const collectionRef = collection(db, "users");

        const q = query(collectionRef, where("email", "==", email));

        const querySnap = await getDocs(q);

        return querySnap.docs;
    }
}