// db auths functions
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, User, signInWithCredential } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import auth from "../../auth";
import { db } from "../../db";

// interfaces
import { IUserFormData, IUserRepositoryDeps } from "../../shared-type/user";

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

        return await signInWithCredential(auth, credential);
    }
}