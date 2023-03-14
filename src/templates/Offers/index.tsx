// styles
import * as Styled from "./styles";

// types
export type OffersTemplateProps = {
	title?: string;
};

const OffersTemplate = ({ title = "" }: OffersTemplateProps) => {
	return (
		<Styled.Wrapper>
			<h1> {title} </h1>
		</Styled.Wrapper>
	);
};

export default OffersTemplate;
