// hooks
import { MutableRefObject, useState } from "react";
import { useSession } from "next-auth/react";

// controller
import RealEstateController from "../../api/controllers/realEstate";

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
import {
	FormDataRealEstateProps,
	RealEstateModel,
} from "../../shared-types/realestate";
import { EditRealEstateTemplateProps } from "../../templates/EditRealEstate";

const RealEstateForm = ({ realEstate }: EditRealEstateTemplateProps) => {
	// auth
	const { data: sessionData } = useSession();

	// states
	const [geoLocationEnabled] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<FormDataRealEstateProps>({
		isSale: realEstate ? realEstate.isSale : false,
		name: realEstate ? realEstate.name : "",
		beds: realEstate ? realEstate.beds : 0,
		bathrooms: realEstate ? realEstate.bathrooms : 0,
		parking: realEstate ? realEstate.parking : false,
		furnished: realEstate ? realEstate.furnished : false,
		address: realEstate ? realEstate.address : "",
		description: realEstate ? realEstate.description : "",
		offer: realEstate ? realEstate.offer : false,
		price: realEstate ? realEstate.price : 0,
		discount: realEstate && realEstate.offer ? realEstate.discount : 0,
		latitude:
			realEstate && realEstate.geolocation
				? realEstate.geolocation.lat
				: 0,
		longitude:
			realEstate && realEstate.geolocation
				? realEstate.geolocation.lng
				: 0,
		images: undefined,
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
	} = data;

	console.log("props: ", data);

	// handleSubmit
	const handleSubmit = async (ref: MutableRefObject<HTMLFormElement>) => {
		setLoading(true);
		const formData: FormData = new FormData(ref.current);
		console.log(formData);
		const response = await RealEstateController.create(
			data,
			formData,
			geoLocationEnabled,
			sessionData.accessToken
		);
		setLoading(false);
		return response;
	};

	if (loading) return <Spinner />;

	return (
		<Styled.Wrapper>
			<Form
				btnText="CREATE LISTING"
				asyncOnSubmit
				onSubmit={
					handleSubmit as <
						RealEstateCreateResponse
					>() => Promise<RealEstateCreateResponse>
				}
				toastSuccess
				toastSuccessMessage={`Real estate ${name} was successfully add to your list`}
			>
				<p>Sell/Rent</p>
				<Styled.ButtonContainer>
					<Button
						type="button"
						name="isSale"
						onClick={() =>
							setData((prevState) => ({
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
							setData((prevState) => ({
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
						setData((s) => ({
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
							setData((s) => ({
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
							setData((s) => ({
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
							setData((prevState) => ({
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
							setData((prevState) => ({
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
							setData((prevState) => ({
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
							setData((prevState) => ({
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
						setData((s) => ({
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
								setData((s) => ({
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
								setData((s) => ({
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
						setData((s) => ({
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
							setData((prevState) => ({
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
							setData((prevState) => ({
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
							setData((s) => ({
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
								setData((s) => ({
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
						setData((prevS) => ({
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

export default RealEstateForm;
