// components
import Heading from "../Heading";
import ListingRealEstateItem from "../ListingRealEstateItem";

// styles
import * as Styled from "./styles";

// types
import { RealEstateModel } from "../../shared-types/realestate";
export type ListingRealEstateProps = {
	realEstateList?: RealEstateModel[];
};

const ListingRealEstate = ({ realEstateList = [] }: ListingRealEstateProps) => {
	return (
		<Styled.Wrapper>
			<Heading as="h2">My real estate listing</Heading>
			<Styled.List>
				{realEstateList.map((realEstate) => (
					<ListingRealEstateItem
						key={realEstate.id}
						{...realEstate}
						type="ok"
					/>
				))}
			</Styled.List>
		</Styled.Wrapper>
	);
};

export default ListingRealEstate;
