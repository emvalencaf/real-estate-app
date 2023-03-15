import { cert, initializeApp } from "firebase-admin/app";

import { getFirestore } from "firebase-admin/firestore";

const credential = require("../../../serviceAccountKey.json");

initializeApp({
    credential: cert(credential),
})

export const db = getFirestore();

