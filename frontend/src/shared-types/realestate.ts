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
};

// reponse data
export type RealEstateCreateResponse = ServerResponse<undefined>;

// create real estate method
export type RealEstateCreateFn = <RealEstateCreateResponse>(
	formData: FormDataRealEstateProps,
	geolocationEnabled: boolean,
	token: string
) => Promise<RealEstateCreateResponse>;
