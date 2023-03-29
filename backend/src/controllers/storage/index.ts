// types
import { Request } from "express";
import { UploadMetadata } from "firebase/storage";
import StorageRepository from "../../repository/storage";

export default class StorageController {
	// upload images at the firebase storage
	static async uploadImages(
		user: Request["user"],
		files: Express.Multer.File[]
	): Promise<string[]> {
		const promises: Promise<string>[] = files.map((file) => {
			// organized the folder at the bucket
			const path = `${user?.uid}/images`;

			// organized file
			const filename = `${Date.now()}+_${file.originalname}`;
			const metadata: UploadMetadata = {
				contentType: file.mimetype,
			};
			// will create a promise for each file and upload the file at the storage
			return StorageRepository.uploadImage(
				path,
				filename,
				metadata,
				file
			);
		});

		// wait for all files to be uploaded and generate URLs
		return await Promise.all(promises);
	}

	// delete images at the firebase storage
	static async deleteImage(filePath: string): Promise<void> {
		try {
			if (!filePath)
				throw new Error(
					"you must inform a path to delete an image from storage"
				);

			await StorageRepository.deleteImage(filePath);
		} catch (err) {
			console.log(err);
		}
	}
}
