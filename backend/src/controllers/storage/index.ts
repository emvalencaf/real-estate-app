import { Request, Response } from "express";

export default class StorageController {
	static async storageImage(req: Request, res: Response) {
		try {
			console.log();
		} catch (err) {
			console.log(err);
			res.status(500).send({
				success: false,
				message: "something went wrong on server",
			});
		}
	}
}
