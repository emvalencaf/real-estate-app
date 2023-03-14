// styles
import * as Styled from "./styles";

// types
export type SignInTemplateProps = {
	title?: string;
};

const SignInTemplate = ({ title = "" }: SignInTemplateProps) => {
	return (
		<Styled.Wrapper>
			<h1> {title} </h1>
		</Styled.Wrapper>
	);
};

export default SignInTemplate;
