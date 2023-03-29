// storage functions
import { firebaseStorage } from "../../upload/storage";

// types
import { ref, UploadMetadata } from "firebase/storage";

export default class StorageRepository {
	// upload image to firebase storage
	static async uploadImage(
		path: string,
		filename: string,
		metadata: UploadMetadata,
		file: Express.Multer.File
	): Promise<string> {
		const fileUpload = firebaseStorage.file(`${path}/${filename}`);

		const fileStream = fileUpload.createWriteStream({
			resumable: false,
			metadata,
		});

		return new Promise<string>((resolve, reject) => {
			fileStream.on("error", (err: Error) => {
				console.log(err);
				reject(err);
			});

			fileStream.on("finish", async () => {
				await fileUpload.makePublic();
				const publicUrl = `https://storage.googleapis.com/${firebaseStorage.name}/${fileUpload.name}`;
				resolve(publicUrl);
			});

			fileStream.end(file.buffer);
		});
	}

	// delete image from firebase storage
	static async deleteImage(filePath: string) {
		// get file
		const file = await firebaseStorage.file(filePath);

		await file.delete();

		console.log(
			`[server]: file ${file.name} was successfully deleted from storage`
		);
	}
}
