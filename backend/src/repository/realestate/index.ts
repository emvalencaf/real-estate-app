import { addDoc, collection, getDoc, serverTimestamp } from "firebase/firestore";
import UserController from "../../controllers/user";
import { db } from "../../db";
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
			discount,
			geolocation,
			images,
			owner,
			timestamp: serverTimestamp(),
		};

		const collectionRef = collection(db, "realEstates");

		const docRef = await addDoc(collectionRef, data);

		const doc = await getDoc(docRef);

		return doc.id;
	}
}
