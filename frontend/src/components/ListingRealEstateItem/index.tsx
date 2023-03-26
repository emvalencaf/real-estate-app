// components
import Moment from "react-moment";
import Picture from "../Picture";
import Link from "next/link";

// styles
import * as Styled from "./styles";

// icons
import { LocationOn } from "@styled-icons/material-outlined";
// types
import { RealEstateModel } from "../../shared-types/realestate";
export type ListingRealEstateItemProps = RealEstateModel & {
	type: string;
};

const ListingRealEstateItem = ({
	isSale = true,
	name = "",
	id = "",
	price = 0,
	offer = false,
	discount = 0,
	beds = 0,
	bathrooms = 0,
	address = "",
	images,
	type,
	timestamp,
}: ListingRealEstateItemProps) => {
	return (
		<Styled.Item>
			<Link href={`/category/${type}/${id}`} passHref legacyBehavior>
				<a>
					<Picture
						srcImg={images[0]}
						altText={`cover picture of ${name}`}
					/>
					<Styled.MomentContainer>
						<Moment fromNow>{timestamp}</Moment>
					</Styled.MomentContainer>
					<Styled.CardDetails>
						<Styled.CardLocation>
							<LocationOn /> <p>{address}</p>
						</Styled.CardLocation>
						<Styled.Name>{name}</Styled.Name>
						<Styled.Price>
							{offer
								? discount.toLocaleString("en-US", {
										style: "currency",
										currency: "USD",
								  })
								: price.toLocaleString("en-US", {
										style: "currency",
										currency: "USD",
								  })}
							{!isSale && " / month"}
						</Styled.Price>
						<Styled.CardBar>
							<Styled.CardBarDetails>
								<p>
									{beds} {beds > 1 ? "Beds" : "Bed"}
								</p>
							</Styled.CardBarDetails>
							<Styled.CardBarDetails>
								<p>
									{bathrooms}{" "}
									{bathrooms > 1 ? "Bathrooms" : "Bathroom"}
								</p>
							</Styled.CardBarDetails>
						</Styled.CardBar>
					</Styled.CardDetails>
				</a>
			</Link>
		</Styled.Item>
	);
};

export default ListingRealEstateItem;
