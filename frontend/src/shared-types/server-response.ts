export type ServerResponse<T> = {
	response?: T;
	success: boolean;
	message?: string;
};
