// components
import Heading from "../Heading";
import ListingRealEstateItem from "../ListingRealEstateItem";

// styles
import * as Styled from "./styles";

// types
import { RealEstateModel } from "../../shared-types/realestate";
import { Dispatch, SetStateAction } from "react";
export type ListingRealEstateProps = {
	realEstateList?: RealEstateModel[];
	handleDelete: (
		id: string,
		isLoadingDelete: boolean,
		setIsLoadingDelete: Dispatch<SetStateAction<boolean>>
	) => Promise<void>;
};

const ListingRealEstate = ({
	realEstateList = [],
	handleDelete,
}: ListingRealEstateProps) => {
	return (
		<Styled.Wrapper>
			<Heading as="h2">My real estate listing</Heading>
			<Styled.List>
				{realEstateList.map((realEstate) => (
					<ListingRealEstateItem
						key={realEstate.id}
						{...realEstate}
						type="ok"
						handleDelete={handleDelete}
					/>
				))}
			</Styled.List>
		</Styled.Wrapper>
	);
};

export default ListingRealEstate;
