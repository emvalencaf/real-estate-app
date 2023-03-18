// hooks
import { getSession } from "next-auth/react";

// types
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";

// utils
import { serverSideRedirect } from "./backend-redirect";

export const privateServerSideProps = async <T>(
	ctx: GetServerSidePropsContext,
	callbackFn?: (session: Session) => Promise<T>
) => {
	const session: Session = await getSession(ctx);

	if (!session) return serverSideRedirect(ctx);
	if (callbackFn) {
		try {
			const result = await callbackFn(session);

			return result;
		} catch (e) {
			console.log(e);
			return serverSideRedirect(ctx);
		}
	} else {
		return {
			props: {
				session,
			},
		};
	}
};
