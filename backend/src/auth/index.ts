import { getAuth } from "firebase/auth";

// firebaseapp
import { firebaseApp } from "../db";

const auth = getAuth(firebaseApp);

export default auth;