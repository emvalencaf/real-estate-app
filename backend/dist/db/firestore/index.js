"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestoreDB = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const credential = require("../../../serviceAccountKey.json");
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)(credential),
});
exports.firestoreDB = (0, firestore_1.getFirestore)();
