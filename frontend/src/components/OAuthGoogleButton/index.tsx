// hooks
import { useState } from "react";

// next auth
import { signIn } from "next-auth/react";

// components
import Button from "../Button";

// styles
import * as Styled from "./styles";

// icons
import { Google } from "@styled-icons/bootstrap";

const OAuthGoogleButton = () => {
	// states
	const [loading, setLoading] = useState<boolean>(false);
	// handle click
	const handleClick = async () => {
		setLoading(true);
		await signIn("google");
		setLoading(false);
		return;
	};

	return (
		<Styled.Wrapper>
			<Button icon={<Google />} disabled={loading} onClick={handleClick}>
				Continue with google
			</Button>
		</Styled.Wrapper>
	);
};

export default OAuthGoogleButton;
