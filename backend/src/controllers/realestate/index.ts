import { Request, Response } from "express";
import { Timestamp } from "firebase/firestore";
import RealEstateRepository from "../../repository/realEstate";
import {
	IRealEstateFormData,
	IRealEstateModel,
} from "../../shared-type/real-estate";
import StorageController from "../storage";
import UserController from "../user";

export default class RealEstateController {
	// create a realestate related to an user
	static async create(req: Request, res: Response) {
		if (!req.user)
			return res.status(403).json({
				success: false,
				message: "you must be authenticated",
			});
		try {
			// request body data
			let data = req.body;
			/*
			// boolean convert
			data.furnished = data.furnished === "true" ? true : false;
			data.isSale = data.isSale === "true" ? true : false;
			data.offer = data.offer === "true" ? true : false;
			data.parking = data.parking === "true" ? true : false;

			// number convert
			data.beds = Number(data.beds);
			data.bathrooms = Number(data.bathrooms);
			data.price = Number(data.price);
			if (data?.discount) data.discount = Number(data.discount);

			// object convert
			data.geolocation = JSON.parse(data.geolocation);
*/
			// format values
			data = RealEstateController.formatValues(data);

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

	// update a real estate related to an user
	static async update(req: Request, res: Response) {
		// get id from url
		const { id } = req.params;

		// check authentication
		if (!req.user)
			return res.status(403).json({
				success: false,
				message: "you must be authenticated",
			});

		try {
			// request body data
			let data = req.body;

			const fetchedImages: string[] = req.body.fetchedImages as string[];

			// get the real estate by an id
			const realEstate = await RealEstateController.getById(id);

			// check if there is a real estate register
			if (!realEstate)
				return res.status(404).send({
					success: false,
					data: null,
					message: "couldn't found a realEstate",
				});

			if (fetchedImages.length > 0) {
				// at frontend user can destach image from the register. So it'll delete the attached images from the storage
				realEstate.images.map(async (image: string) => {
					// will check if the image saved at storage was destached on frontend by the user
					if (fetchedImages.indexOf(image) < 0) {
						// get the image filename
						const filename = image.substring(
							image.lastIndexOf("/") + 1
						);

						/// set file path
						const filePath = `${req.user?.uid}/images/${filename}`;

						// delete from storage the file
						await StorageController.deleteImage(filePath);

						return null;
					}
					return image;
				});
			}

			// update real estate image gallery
			data.images = data.images
				? [...fetchedImages, ...data.images]
				: fetchedImages;

			// format data
			data = RealEstateController.formatValues(data);

			console.log("controller: ", data);

			// update a real estate's register
			await RealEstateRepository.update(id, {
				...data,
				owner: req.user?.uid,
			});

			res.status(200).send({
				success: true,
				data: null,
				message: "successfully updated a real estate register",
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

	// get all realestate realted to an user id
	static async getAllFromUser(req: Request, res: Response) {
		const { userId } = req.params;
		try {
			const realEstates = await RealEstateRepository.getAllFromUser(
				userId
			);

			if (!realEstates)
				return res.status(404).send({
					data: null,
					success: true,
					message: "no data was fetched",
				});

			const list: IRealEstateModel[] = [];

			// convert timestamp to JS Date
			realEstates.forEach((realEstate) =>
				list.push(
					Object.assign(
						{},
						{
							...realEstate,
							timestamp: (
								realEstate.timestamp as Timestamp
							).toDate(),
						}
					)
				)
			);
			return res.status(200).send({
				data: list,
				success: true,
				message:
					"successfully fetched real estates data realted to an user",
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

	// delete a realestate related to an user
	static async delete(req: Request, res: Response) {
		// check if user is authenticated
		if (!req.user)
			return res.status(403).json({
				success: false,
				message: "you must be authenticated",
			});
		try {
			const { id: realEstateUid } = req.params;

			const realEstate = await RealEstateController.getById(
				realEstateUid
			);

			if (!realEstate)
				return res.status(404).send({
					success: false,
					data: null,
					message: "couldn't found the real estate",
				});

			// delete doc by id
			await RealEstateRepository.delete(realEstateUid);

			// will update the user doc removing the real estate uid at the real estates list
			await UserController.updateUserRealEstate(
				realEstateUid,
				req.user?.uid,
				"remove"
			);

			// will delete the images from storage
			realEstate.images.forEach(async (image: string) => {
				// get the image filename
				const filename = image.substring(image.lastIndexOf("/") + 1);

				/// set file path
				const filePath = `${req.user?.uid}/images/${filename}`;

				// delete from storage the file
				await StorageController.deleteImage(filePath);
			});

			return res.status(200).send({
				data: null,
				success: true,
				message: "successfully delete real estate",
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

	// get a real estate by an id
	static async getByParams(req: Request, res: Response) {
		const { id } = req.params;
		try {
			const realEstate = await RealEstateController.getById(id);

			if (!realEstate)
				return res.status(404).send({
					data: null,
					success: false,
					message: "couldn't find a real estate with that id",
				});

			return res.status(200).send({
				data: realEstate,
				success: true,
				message:
					"successfully fetched real estates data realted to an user",
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

	// get a real estate by an id
	static async getById(id: string) {
		if (!id) throw new Error("must request a real estate by an id");

		return await RealEstateRepository.getById(id);
	}

	// format form data into object
	static formatValues(data: IRealEstateFormData) {
		// boolean convert
		data.furnished = data.furnished === "true" ? true : false;
		data.isSale = data.isSale === "true" ? true : false;
		data.offer = data.offer === "true" ? true : false;
		data.parking = data.parking === "true" ? true : false;

		// number convert
		data.beds = Number(data.beds);
		data.bathrooms = Number(data.bathrooms);
		data.price = Number(data.price);
		if (data?.discount) data.discount = Number(data.discount);

		// object convert
		data.geolocation = JSON.parse(data.geolocation as string);

		// return formated data
		return data;
	}

	// query real estate by category and id
	static async queryByCategoryAndId(req: Request, res: Response) {
		const { categoryName, realEstateId } = req.params;

		try {
			let isSale = true;

			if (categoryName === "sale") isSale = true;
			if (categoryName === "rent") isSale = false;

			const realEstate =
				await RealEstateRepository.queryByCategoryAndRealEstate(
					isSale,
					realEstateId
				);
			if (!realEstate)
				return res.status(404).send({
					data: null,
					success: false,
					message: `couldn't find a real estate with that id in ${categoryName}'s category`,
				});

			return res.status(200).send({
				data: realEstate,
				success: true,
				message: `successfully fetched a real estate from ${categoryName}'s category`,
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
