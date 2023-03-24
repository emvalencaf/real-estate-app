import { IGeolocation } from "./geocode";

// user model interface
export interface IRealEstateModel {
	isSale: boolean;
	name: string;
	description: string;
	furnished: boolean;
	parking: boolean;
	beds: number;
	bathrooms: number;
	offer: boolean;
	price: number;
	discount?: number;
	images: string[];
	address: string;
	geolocation: IGeolocation;
	owner: string;
}
