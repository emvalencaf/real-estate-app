type JSONError = {
	message: string;
};

export default class CreateFetch {
	static async dispatch<T>(url: string, options: RequestInit): Promise<T> {
		try {
			const response = await fetch(url, options);
			console.log(response.body);
			if (!response.ok) {
				// error message from the API
				const json: JSONError = await response.json();
				throw new Error(json.message);
			}

			const json: T = await response.json();

			return json;
		} catch (err) {
			console.log(err);

			throw new Error(err.message);
		}
	}
}
