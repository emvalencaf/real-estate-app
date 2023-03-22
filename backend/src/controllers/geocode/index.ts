// types
import { Request, Response } from "express";
import GeocodeRepository from "../../repository/geocode";

export default class GeocodeController {
	static async getGeoLocation(req: Request, res: Response) {
		const { address } = req.body;
		try {
			const response = await GeocodeRepository.getGeoLocation(address);

			const { results, status } = response;

			if (status === "ZERO_RESULTS")
				return res.status(404).send({
					data: null,
					success: false,
					message: "No address was found it",
				});

			res.status(200).send({
				data: {
					lat: results[0].geometry.location.lat,
					lng: results[0].geometry.location.lng,
				},
				success: true,
				message:
					"You successfully found it the longitude and latitudes of the address",
			});
		} catch (err) {
			console.log(err);
			res.status(500).send({
				success: false,
				message: "something went wrong on the server",
			});
		}
	}
}
