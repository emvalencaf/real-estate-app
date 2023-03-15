// db auths functions
import { Auth, createUserWithEmailAndPassword, updateProfile, User } from "firebase/auth";
import auth from "../../auth";
import { db } from "../../db/firestore";

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
        const docRef = db.collection("users").doc(uid);
        await docRef.set({name, email});
        const response = await docRef.get();
        return response;
    }
    static async update(name: string) {
        if (!auth || !auth.currentUser) throw new Error("server error");
        await updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
}