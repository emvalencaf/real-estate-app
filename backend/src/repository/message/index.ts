// firestore functions and database
import { addDoc, collection, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../db";

export default class MessageRepository {
	// create a message with sender, content and receiver
	static async create(
		senderUid: string,
		message: string,
		receiverUid: string
	) {
		// format data
		const data = {
			from: senderUid,
			message,
			to: receiverUid,
			timestamp: serverTimestamp(),
		};

		// get collection refs
		const collectionRef = collection(db, "messages");

		// create doc in the collection
		const docRef = await addDoc(collectionRef, data);

		// get doc
		const doc = await getDoc(docRef);

		// return message id
		return doc.id;
	}
}
