import { Request, Response } from "express";
import RealEstateRepository from "../../repository/realEstate";
import UserController from "../user";

export default class RealEstateController {
	static async create(req: Request, res: Response) {
		if (!req.user)
			return res.status(403).json({
				success: false,
				message: "you must be authenticated",
			});
		try {
			// request body data
			const data = req.body;

			data.furnished = data.furnished === "true" ? true : false;
			data.isSale = data.isSale === "true" ? true : false;
			data.offer = data.offer === "true" ? true : false;
			data.parking = data.parking === "true" ?
			true : false;

			data.beds = Number(data.beds);
			data.price = Number(data.price);
			if (data?.discount) data.discount = Number(data.discount);
			data.bathrooms = Number(data.bathhrooms);


			// create a real estate's register and fetched it's data
			const realEstateUid = await RealEstateRepository.create({
				...data,
				owner: req.user?.uid,
			});

			// create a one to many relation user-real estate
			await UserController.updateUserRealEstate(
				realEstateUid,
				req.user?.uid
			);

			res.status(200).send({
				success: true,
				data: null,
				message: "successfully created a new real estate register",
			});
		} catch (err) {
			console.log(err);
			res.status(500).send({
				data: null,
				success: false,
				message: "something went wrong on the server",
			});
		}
	}
}
