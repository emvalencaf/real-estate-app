export const clientSideRedirect = (redirectTo?: string) => {
	if (typeof window === "undefined") return;

	const newPath = redirectTo || encodeURI(window.location.pathname);

	console.log(
		"url to redirect in clientSideRedirect : ",
		`${process.env.NEXT_PUBLIC_LOGIN_URI}/?redirect=${newPath}`
	);

	window.location.href = `${process.env.NEXT_PUBLIC_LOGIN_URI}/?redirect=${newPath}`;

	return null;
};
