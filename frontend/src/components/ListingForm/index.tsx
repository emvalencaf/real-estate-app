// hooks
import { useState } from "react";

// components
import Button from "../Button";
import FileImageInput from "../FileImageInput";
import Form from "../Form";
import NumberInput from "../NumberInput";
import Spinner from "../Spinner";
import TextInput from "../TextInput";

// styles
import * as Styled from "./styles";

// types
type FormDataProps = {
	isSale: boolean;
	name: string;
	beds: number;
	bathrooms: number;
	furnished: boolean;
	parking: boolean;
	address: string;
	description: string;
	price: number;
	discount: number;
	offer: boolean;
	latitude: number;
	longitude: number;
};

export type ListingFormProps = {
	title?: string;
};

const ListingForm = ({ title = "" }: ListingFormProps) => {
	// states
	const [geoLocationEnabled, setGeoLocationEnabled] =
		useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [formData, setFormData] = useState<FormDataProps>({
		isSale: false,
		name: "",
		beds: 0,
		bathrooms: 0,
		parking: false,
		furnished: false,
		address: "",
		description: "",
		offer: false,
		price: 0,
		discount: 0,
		latitude: 0,
		longitude: 0,
	});

	const {
		isSale,
		name,
		beds,
		bathrooms,
		parking,
		furnished,
		address,
		description,
		offer,
		price,
		discount,
		latitude,
		longitude,
	} = formData;

	// handleSubmit
	const handleSubmit = () => {
		setLoading(true);
	};

	if (loading) return <Spinner />;

	return (
		<Styled.Wrapper>
			<Form
				btnText="CREATE LISTING"
				asyncOnSubmit
				onSubmit={handleSubmit}
			>
				<p>Sell/Rent</p>
				<Styled.ButtonContainer>
					<Button
						type="button"
						name="isSale"
						onClick={() =>
							setFormData((prevState) => ({
								...prevState,
								isSale: true,
							}))
						}
						darkMode={!isSale}
					>
						Sell
					</Button>
					<Button
						type="button"
						name="isSale"
						onClick={() =>
							setFormData((prevState) => ({
								...prevState,
								isSale: false,
							}))
						}
						darkMode={isSale}
					>
						Rent
					</Button>
				</Styled.ButtonContainer>
				<TextInput
					name="name"
					label="Name"
					onInputChange={(v: string) =>
						setFormData((s) => ({
							...s,
							name: v,
						}))
					}
					value={name}
					minLength={10}
					maxLength={32}
					required
				/>
				<Styled.InputContainer>
					<NumberInput
						name="beds"
						type="number"
						label="beds"
						value={beds}
						onInputChange={(v: number) =>
							setFormData((s) => ({
								...s,
								beds: v,
							}))
						}
						min="1"
						max="50"
						required
					/>
					<NumberInput
						name="bathrooms"
						type="number"
						label="bathrooms"
						value={bathrooms}
						onInputChange={(v: number) =>
							setFormData((s) => ({
								...s,
								bathrooms: v,
							}))
						}
						min="1"
						max="50"
						required
					/>
				</Styled.InputContainer>
				<p>Parking spot</p>
				<Styled.ButtonContainer>
					<Button
						type="button"
						name="parking"
						onClick={() =>
							setFormData((prevState) => ({
								...prevState,
								parking: true,
							}))
						}
						darkMode={!parking}
					>
						YES
					</Button>
					<Button
						type="button"
						name="parking"
						onClick={() =>
							setFormData((prevState) => ({
								...prevState,
								parking: false,
							}))
						}
						darkMode={parking}
					>
						NO
					</Button>
				</Styled.ButtonContainer>
				<p>Furnished</p>
				<Styled.ButtonContainer>
					<Button
						type="button"
						name="furnished"
						onClick={() =>
							setFormData((prevState) => ({
								...prevState,
								furnished: true,
							}))
						}
						darkMode={!furnished}
					>
						YES
					</Button>
					<Button
						type="button"
						name="furnished"
						onClick={() =>
							setFormData((prevState) => ({
								...prevState,
								furnished: false,
							}))
						}
						darkMode={furnished}
					>
						NO
					</Button>
				</Styled.ButtonContainer>
				<TextInput
					name="address"
					label="Address"
					onInputChange={(v: string) =>
						setFormData((s) => ({
							...s,
							address: v,
						}))
					}
					value={address}
					required
					as={"textarea"}
				/>
				{!geoLocationEnabled && (
					<Styled.InputContainer>
						<NumberInput
							name="latitude"
							type="number"
							label="latitude"
							value={latitude}
							onInputChange={(v: number) =>
								setFormData((s) => ({
									...s,
									latitude: v,
								}))
							}
							required
						/>
						<NumberInput
							name="longitude"
							type="number"
							label="longitude"
							value={longitude}
							onInputChange={(v: number) =>
								setFormData((s) => ({
									...s,
									longitude: v,
								}))
							}
							required
						/>
					</Styled.InputContainer>
				)}
				<TextInput
					name="description"
					label="Description"
					onInputChange={(v: string) =>
						setFormData((s) => ({
							...s,
							description: v,
						}))
					}
					value={description}
					required
					as={"textarea"}
				/>
				<p>Offer</p>
				<Styled.ButtonContainer>
					<Button
						type="button"
						name="offer"
						onClick={() =>
							setFormData((prevState) => ({
								...prevState,
								offer: true,
							}))
						}
						darkMode={!offer}
					>
						YES
					</Button>
					<Button
						type="button"
						name="offer"
						onClick={() =>
							setFormData((prevState) => ({
								...prevState,
								offer: false,
							}))
						}
						darkMode={offer}
					>
						NO
					</Button>
				</Styled.ButtonContainer>
				<Styled.InputContainer>
					<NumberInput
						name="price"
						type="number"
						label="price"
						value={price}
						onInputChange={(v: number) =>
							setFormData((s) => ({
								...s,
								price: v,
							}))
						}
						min="1"
						required
					/>
					{!isSale && <p> $/ Month</p>}
				</Styled.InputContainer>
				{offer && (
					<Styled.InputContainer>
						<NumberInput
							name="discount"
							type="number"
							label="discount"
							value={discount}
							onInputChange={(v: number) =>
								setFormData((s) => ({
									...s,
									discount: v,
								}))
							}
						/>
						{!isSale && <p> $/ Month</p>}
					</Styled.InputContainer>
				)}
				<FileImageInput
					name="images"
					label={`the first image will be the cover (max: 6)`}
					onInputChange={(fileList) =>
						setFormData((prevS) => ({
							...prevS,
							images: fileList,
						}))
					}
					required
					multiple
				/>
			</Form>
		</Styled.Wrapper>
	);
};

export default ListingForm;
