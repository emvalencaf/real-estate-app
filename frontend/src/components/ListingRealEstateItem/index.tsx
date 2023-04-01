// hooks
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";

// components
import Moment from "react-moment";
import Picture from "../Picture";
import Link from "next/link";

// styles
import * as Styled from "./styles";

// icons
import { LocationOn, Delete, Edit } from "@styled-icons/material-outlined";

// types
import { RealEstateModel } from "../../shared-types/realestate";
import Button from "../Button";
export type ListingRealEstateItemProps = RealEstateModel & {
	type: string;
	handleDelete: (
		id: string,
		isLoadingDelete: boolean,
		setIsLoadingDelete: Dispatch<SetStateAction<boolean>>
	) => Promise<void>;
	handleEdit: (id: string) => void;
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
	handleDelete,
	handleEdit,
}: ListingRealEstateItemProps) => {
	// session data
	const { data } = useSession();

	// states
	const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

	return (
		<Styled.Item>
			<Styled.ItemContainer>
				<Link
					href={`/categories/${
						isSale ? "sale" : "rent"
					}/real-estates/${id}`}
					passHref
					legacyBehavior
				>
					<a>
						<Picture
							srcImg={images[0]}
							altText={`cover picture of ${name}`}
						/>
					</a>
				</Link>
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
							? (Number(price) - Number(discount)).toLocaleString(
									"en-US",
									{
										style: "currency",
										currency: "USD",
									}
							  )
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
						{data?.user && (
							<Styled.CardBarButtonContainer>
								<Button
									icon={<Edit />}
									onClick={() => handleEdit(id)}
								/>
								<Button
									icon={<Delete />}
									onClick={() =>
										handleDelete(
											id,
											isLoadingDelete,
											setIsLoadingDelete
										)
									}
									disabled={isLoadingDelete}
								/>
							</Styled.CardBarButtonContainer>
						)}
					</Styled.CardBar>
				</Styled.CardDetails>
			</Styled.ItemContainer>
		</Styled.Item>
	);
};

export default ListingRealEstateItem;
