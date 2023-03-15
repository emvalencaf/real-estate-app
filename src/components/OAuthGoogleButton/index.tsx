// styles
import { Google } from "@styled-icons/bootstrap";
import Button from "../Button";
import * as Styled from "./styles";

const OAuthGoogleButton = () => {
	return (
		<Styled.Wrapper>
			<Button icon={<Google />}>Continue with google</Button>
		</Styled.Wrapper>
	);
};

export default OAuthGoogleButton;
