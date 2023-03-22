declare global {
	namespace NodeJS {
		interface ProcessEnv extends NodeJS.ProcessEnv {
			PORT: number;
			DB_API_KEY: string;
			DB_API_AUTH_DOMAIN: string;
			DB_API_PROJECT_ID: string;
			DB_API_STORAGE_BUCKET: string;
			DB_API_MESSAGING_SENDER_ID: string;
			DB_API_APP_ID: string;
			DB_URL: string;
			FRONTEND_URL: string;
		}
	}
}

export {};
