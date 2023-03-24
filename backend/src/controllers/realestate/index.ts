import { Request, Response } from "express";
import RealEstateRepository from "../../repository/realEstate";

export default class RealEstateController {
	static async create(req: Request, res: Response) {
		if (!req.user)
			return res.status(403).json({
				success: false,
				message: "you must be authenticated",
			});

		console.log(req.body);
		try {
			const {
				isSale,
				name,
				description,
				furnished,
				parking,
				beds,
				bathrooms,
				offer,
				price,
				discount,
				images,
				address,
				geolocation,
			} = req.body;
			const rea = await RealEstateRepository.create({
				isSale,
				name,
				description,
				furnished,
				parking,
				beds,
				bathrooms,
				offer,
				price,
				discount,
				images,
				address,
				geolocation,
				owner: req.user?.uid,
			});
			res.status(200).send({
				success: true,
				data: null,
				message: "",
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
