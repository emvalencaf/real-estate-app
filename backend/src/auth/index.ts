import { Auth, getAuth } from "firebase/auth";
// firebaseapp
import { firebaseApp } from "../db";

const auth: Auth = getAuth(firebaseApp);

export default auth;
