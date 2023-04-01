// firebase firestore functions
import {
	DocumentData,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	serverTimestamp,
	updateDoc,
	where,
} from "firebase/firestore";

// database reference
import { db } from "../../db";

// types
import { IRealEstateModel } from "../../shared-type/real-estate";

export default class RealEstateRepository {
	// create a realestate related to an user
	static async create({
		isSale,
		name,
		description,
		address,
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
			address,
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

	// update a real estate realated to an user
	static async update(
		id: string,
		{
			isSale,
			name,
			description,
			address,
			furnished,
			beds,
			bathrooms,
			offer,
			discount,
			geolocation,
			images,
			owner,
		}: IRealEstateModel
	) {
		// create a data
		const data = {
			isSale,
			name,
			address,
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

		// doc ref
		const docRef = doc(db, "realEstates", id);

		// update doc
		await updateDoc(docRef, data);
	}

	// get all realestate related to an user id
	static async getAllFromUser(userId: string) {
		// get collection ref
		const realEstateCollectionRef = collection(db, "realEstates");

		// create query to search for user id
		const q = query(
			realEstateCollectionRef,
			where("owner", "==", userId),
			orderBy("timestamp", "desc")
		);

		// get the docs snapshot
		const querySnap = await getDocs(q);

		const realEstates: IRealEstateModel[] = [];

		querySnap.forEach((realEstate) => {
			const data = realEstate.data() as IRealEstateModel;
			return realEstates.push({
				id: realEstate.id,
				...data,
			});
		});
		console.log(realEstates);
		return realEstates;
	}

	// delete a realestate related to an user
	static async delete(id: string) {
		// get real estate doc ref
		const docRef = doc(db, "realEstates", id);

		// delete real estate doc
		await deleteDoc(docRef);
	}

	// get a real estate by an id
	static async getById(id: string) {
		// get real estate doc ref
		const docRef = doc(db, "realEstates", id);

		// return doc data to controller
		return await (await getDoc(docRef)).data();
	}

	static async queryByCategoryAndRealEstate(
		isSale: boolean,
		realEstateId: string
	) {
		// get collection ref
		const collectionRef = collection(db, "realEstates");
		console.log(realEstateId);
		// query
		const q = query(collectionRef, where("isSale", "==", isSale));

		const querySnap = await getDocs(q);

		let data: null | IRealEstateModel = null;

		querySnap.docs.forEach((doc) => {
			if (doc.id === realEstateId) data = doc.data() as IRealEstateModel;
		});
		return data;
	}
}
