// hooks
import { useEffect, useState } from "react";

// types
type UseFetchHookStatesResult<T> = {
	data: T;
	isLoading: boolean;
	error: Error;
};

type UseFetchHook = <T>({
	url,
	cb,
}: {
	url: string;
	cb: (url: string, options: RequestInit) => Promise<T>;
}) => UseFetchHookStatesResult<T>;

export const useFetch: UseFetchHook = <T>({ url, cb }) => {
	// states
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	// effect to fetch data
	useEffect(() => {
		// flag
		let isMounted = true;

		// signal to cancel AJAX when the component is unmounted
		const abortController = new AbortController();
		const signal = abortController.signal;

		const fetchData = async () => {
			try {
				if (cb) {
					// fetch data
					const response = isMounted
						? await cb(url, {
								signal,
						  })
						: null;

					// switchs state for fetched data
					setData(response);
					setError(null);
					setIsLoading(false);
				} else {
					// fetch data
					const response = isMounted
						? await fetch(url, { signal })
						: null;

					// check if was fetched some data
					if (!response.ok) {
						throw new Error("couldn't fetched data");
					}

					// convert server response into json
					const responseData = await response.json();

					// switched states with fetched data
					setData(responseData);
					setError(null);
					setIsLoading(false);
				}
			} catch (err) {
				setError(err);
			}
			setIsLoading(false);
		};

		fetchData();

		return () => {
			// switched flag to control the fetch
			isMounted = false;

			// cancel fetch hook
			abortController.abort();

			// clean up states
			setIsLoading(true);
			setError(null);
			setData(null);
		};
	}, [url, cb]);

	// return the data
	return { data, isLoading, error };
};
