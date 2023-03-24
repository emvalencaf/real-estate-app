import { getStorage } from "firebase-admin/storage";

// Initialize Cloud Storage and get a reference to the service
export const firebaseStorage = getStorage().bucket();
