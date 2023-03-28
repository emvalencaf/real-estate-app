import { ServerResponse } from "./server-response";

export type GeocodeGetLocationResponseData = {
	lat: number;
	lng: number;
};

export type GeocodeGetLocationFnResponse =
	ServerResponse<GeocodeGetLocationResponseData>;
