declare global {
	namespace NodeJS {
		interface ProcessEnv extends NodeJS.ProcessEnv {
			NEXT_PUBLIC_API_URL: string;
			NEXT_PUBLIC_LOGIN_URI: string;
			NEXTAUTH_URL: string;
			NEXT_AUTH_SECRET: string;
			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;
		}
	}
}
