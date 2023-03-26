// firebase firestore functions
import {
	addDoc,
	collection,
	getDoc,
	serverTimestamp,
} from "firebase/firestore";

// database reference
import { db } from "../../db";

// types
import { IRealEstateModel } from "../../shared-type/real-estate";

export default class RealEstateRepository {
	static async create({
		isSale,
		name,
		description,
		furnished,
		beds,
		bathrooms,
		offer,
		discount,
		geolocation,
		images,
		owner,
	}: IRealEstateModel) {
		const data = {
			isSale,
			name,
			description,
			furnished,
			beds,
			bathrooms,
			offer,
			geolocation,
			images,
			discount: offer ? discount : null,
			owner,
			timestamp: serverTimestamp(),
		};

		const collectionRef = collection(db, "realEstates");

		const docRef = await addDoc(collectionRef, data);

		const doc = await getDoc(docRef);

		return doc.id;
	}
}
