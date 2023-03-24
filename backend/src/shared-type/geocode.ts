interface IGeocodeLocation {
	geometry: {
		location: {
			lat: number;
			lng: number;
		};
	};
}
export interface IGeocodeGetLocationFnResponse {
	results: IGeocodeLocation[];
	status: string;
}

// body request from frontend
export interface IGeolocation {
	lat: number;
	lng: number;
}
