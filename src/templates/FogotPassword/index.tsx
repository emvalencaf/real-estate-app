// styles
import * as Styled from "./styles";

// types
export type FogotPasswordTemplateProps = {
	title?: string;
};

const FogotPasswordTemplate = ({ title = "" }: FogotPasswordTemplateProps) => {
	return (
		<Styled.Wrapper>
			<h1> {title} </h1>
		</Styled.Wrapper>
	);
};

export default FogotPasswordTemplate;
