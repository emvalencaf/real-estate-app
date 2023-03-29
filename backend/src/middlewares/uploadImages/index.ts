// firebase storage
import { firebaseStorage } from "../../upload/storage";

// types
import { Request, Response, NextFunction } from "express";
import multer, { FileFilterCallback } from "multer";
import StorageController from "../../controllers/storage";

// Configure Multer to store uploaded files in memory
const multerStorage = multer.memoryStorage();

// Will filter any files that's not a image
const fileFilter = (
	req: Request,
	file: Express.Multer.File,
	cb: FileFilterCallback
) => {
	if (file.mimetype.startsWith("image/")) {
		cb(null, true);
	} else {
		cb(new Error(`invalid file type for ${file.originalname}`));
	}
};

// Create a multer instance
export const uploader = multer({
	storage: multerStorage,
	fileFilter: fileFilter,
});

// Middleware function to handle file upload
export const uploadFilesMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		if (!req?.user)
			return res.status(401).send({
				success: false,
				message: "you must be authenticated",
			});
		console.log("uploading image handler", req.body);

		// if there is already images related to a register and no files, let's skip that middleware here
		req.body.fetchedImages = JSON.parse(req.body.fetchedImages);

		if (req.body.fetchedImages && req.files?.length === 0) return next();

		// validation
		if (!req.files || Object.keys(req.files).length === 0)
			return res.status(400).send({
				success: false,
				message: "No files were upload",
			});

		if (req.files.length > 6)
			return res.status(400).send({
				success: false,
				message: "You cannot upload more than 6 files",
			});

		if (req.body.fetchedImages) {
			// check the limit of image attached to a register
			if (
				req.body.fetchedImages &&
				req.files.length + req.body?.fetchedImages.length > 6
			)
				return res.status(400).send({
					success: false,
					message: `You cannot upload that number of images. The max images attached to a register is 6, you've already upload: ${req.body.fetchedImages.length}`,
				});
		}

		// upload files and collect their URLs
		const files = req.files as Express.Multer.File[];

		const urls = await StorageController.uploadImages(req?.user, files);
		/*
		const promises: Promise<string>[] = files.map((file) => {
			// organized the folder at the bucket
			const path = `${req.user?.uid}/images`;
			const filename = `${Date.now()}+_${file.originalname}`;
			const metadata = {
				contentType: file.mimetype,
			};

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
		});

		// wait for all files to be uploaded and generate URLs
		const urls = await Promise.all(promises);*/
		req.body.images = urls;

		next();
	} catch (err) {
		console.log(err);
		res.status(500).send({
			success: false,
			message: "something went wrong on our server",
		});
	}
};
