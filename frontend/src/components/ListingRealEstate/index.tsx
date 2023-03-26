// styles
import * as Styled from "./styles";

// types
export type ListingRealEstateProps = {
	title?: string;
};

const ListingRealEstate = ({ title = "" }: ListingRealEstateProps) => {
	return (
		<Styled.Wrapper>
			<h1> {title} </h1>
		</Styled.Wrapper>
	);
};

export default ListingRealEstate;
