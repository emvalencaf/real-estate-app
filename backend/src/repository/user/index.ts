// db auths functions
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, User, signInWithCredential } from "firebase/auth";
import { doc, DocumentData, DocumentReference, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import auth from "../../auth";
import { db } from "../../db";

// interfaces
import { IUserFormData } from "../../shared-type/user";

export default class UserRepository{
    static async signIn({email, password}: Pick<IUserFormData, "email" | "password">) {

    }
    // create a new user in auth firebase
    static async signUpAuth({name, email, password}: IUserFormData): Promise<User> {

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        UserRepository
        await UserRepository.update(name);
        const { user } = userCredentials;
        return user;
    }

    // create a new user in firestore
    static async signUp({name, email}: Pick<IUserFormData,"email" | "name">, uid: string) {
        const refDoc = doc(db, "users", uid);

        const data = {
            name,
            email,
            timestamp: serverTimestamp(),
        };
        
        return await setDoc(refDoc, data);
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
}