import { Timestamp } from "firebase/firestore";
import { IGeolocation } from "./geocode";

// real estate model interface
export interface IRealEstateModel {
	id?: string;
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
	timestamp: Timestamp | Date;
}

// request body data
export interface IRealEstateFormData {
	id: string;
	isSale: string | boolean;
	name: string;
	description: string;
	furnished: string | boolean;
	parking: string | boolean;
	beds: string | number;
	bathrooms: string | number;
	offer: string | boolean;
	price: string | number;
	discount?: string | number;
	images: string[];
	address: string;
	geolocation: string | IGeolocation;
	owner: string;
	timestamp: string;
}
