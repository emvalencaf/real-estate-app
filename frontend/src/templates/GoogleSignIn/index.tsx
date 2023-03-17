// hooks
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

// styles
import * as Styled from "./styles";

const GoogleSignInTemplate = () => {
	const { data: session, status } = useSession();

	useEffect(() => {
		if (!(status === "loading" && !session)) void signIn("google");
		if (session) window.close();
	}, [session, status]);

	return <Styled.Wrapper />;
};

export default GoogleSignInTemplate;
