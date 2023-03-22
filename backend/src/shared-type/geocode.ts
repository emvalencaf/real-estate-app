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
