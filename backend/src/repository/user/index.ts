import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../auth";
import { IUserFormData, IUserModel } from "../../shared-type/user";

export default class UserRepository {
    static async signIn() {

    }
    static async signUp({name, email, password}: IUserFormData) {

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        return userCredentials.user;
    }
}