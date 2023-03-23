import { ServerResponse } from "./server-response";

type GeocodeGetLocationResponseData = {
	lat: number;
	lng: number;
};

export type GeocodeGetLocationFnResponse =
	ServerResponse<GeocodeGetLocationResponseData>;
