// types
import { GetServerSidePropsContext } from "next";

export const serverSideRedirect = (
	ctx: GetServerSidePropsContext,
	redirectTo?: string
) => {
	const newPath = redirectTo || encodeURI(ctx.resolvedUrl);
	console.log(
		"redirectTo url: ",
		`${process.env.NEXT_PUBLIC_LOGIN_URI}/?redirect=${newPath}`
	);
	return {
		props: {},
		redirect: {
			destination: `${process.env.NEXT_PUBLIC_LOGIN_URI}/?redirect=${newPath}`,
			permanent: false,
		},
	};
};
