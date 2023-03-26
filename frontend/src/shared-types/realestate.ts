import { ServerResponse } from "./server-response";

export type FormDataRealEstateProps = {
	isSale: boolean;
	name: string;
	beds: number;
	bathrooms: number;
	furnished: boolean;
	parking: boolean;
	address: string;
	description: string;
	price: number;
	discount: number;
	offer: boolean;
	latitude: number;
	longitude: number;
	images?: FileList | File;
	timestamp?: Date;
};

// real estate model
export type RealEstateModel = FormDataRealEstateProps & {
	id: string;
};

// reponse data from create method
export type RealEstateCreateResponse = ServerResponse<undefined>;

// respones data from get method
export type RealEstateGetResponse<T> = ServerResponse<T>;
// create real estate method
export type RealEstateCreateFn = <RealEstateCreateResponse>(
	formData: FormDataRealEstateProps,
	geolocationEnabled: boolean,
	token: string
) => Promise<RealEstateCreateResponse>;

// get all real estate from an user method
export type RealEstateGetAllFromUser = (
	userId: string
) => Promise<RealEstateGetResponse<RealEstateModel[]>>;
