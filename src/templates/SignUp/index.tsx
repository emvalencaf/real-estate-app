// styles
import * as Styled from "./styles";

// types
export type SignUpTemplateProps = {
	title?: string;
};

const SignUpTemplate = ({ title = "" }: SignUpTemplateProps) => {
	return (
		<Styled.Wrapper>
			<h1> {title} </h1>
		</Styled.Wrapper>
	);
};

export default SignUpTemplate;
