// components
import { RealEstateModel } from "../../shared-types/realestate";
import FormContactOwner from "../FormContactOwner";
import Heading from "../Heading";

// styles
import * as Styled from "./styles";

// icons
import {
	LocationOn,
	Bed,
	Bathroom,
	LocalParking,
	Chair,
} from "@styled-icons/material-outlined";

// types
export type RealEstateContentProps = Pick<
	RealEstateModel,
	| "address"
	| "bathrooms"
	| "beds"
	| "description"
	| "geolocation"
	| "isSale"
	| "offer"
	| "parking"
	| "name"
	| "timestamp"
	| "price"
	| "discount"
	| "furnished"
	| "owner"
>;

const RealEstateContent = ({
	isSale = false,
	name = "",
	beds,
	parking,
	furnished,
	bathrooms,
	address = "",
	description = "",
	offer = false,
	discount,
	price,
	owner,
}: RealEstateContentProps) => {
	return (
		<Styled.Wrapper>
			<Styled.Content>
				<Heading as="h3" size="small">
					{name} -
					{offer
						? (Number(price) - Number(discount)).toLocaleString(
								"en-US",
								{
									style: "currency",
									currency: "USD",
								}
						  )
						: Number(price).toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
						  })}
					{!isSale ? "/ month" : ""}
				</Heading>
				<Styled.Address>
					<LocationOn /> <p>{address}</p>
				</Styled.Address>
				<Styled.Labels>
					<Styled.Label isOffer={false}>
						{isSale ? "Sale" : "Rent"}
					</Styled.Label>
					{offer && (
						<Styled.Label isOffer={true}>
							{`${Number(discount).toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
							})} discount`}
						</Styled.Label>
					)}
				</Styled.Labels>
				<p>
					<span>Descrition</span> - {description}
				</p>
				<Styled.DetailsList>
					<Styled.Item>
						<Bed />
						{Number(beds) > 1 ? `${beds} beds` : `${beds} bed`}
					</Styled.Item>
					<Styled.Item>
						<Bathroom />
						{Number(bathrooms) > 1
							? `${bathrooms} bathrooms`
							: `${bathrooms} bathroom`}
					</Styled.Item>
					<Styled.Item>
						<LocalParking />
						{parking ? "Parking spot" : "No parking"}
					</Styled.Item>
					<Styled.Item>
						<Chair />
						{furnished ? "Furnished" : "No furnishd"}
					</Styled.Item>
				</Styled.DetailsList>
				<FormContactOwner ownerId={owner} />
			</Styled.Content>
			<Styled.Map></Styled.Map>
		</Styled.Wrapper>
	);
};

export default RealEstateContent;
