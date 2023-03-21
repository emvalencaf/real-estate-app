// styles
import { useState } from "react";
import Button from "../Button";
import FileImageInput from "../FileImageInput";
import Form from "../Form";
import NumberInput from "../NumberInput";
import TextInput from "../TextInput";
import * as Styled from "./styles";

// types
export type ListingFormProps = {
	title?: string;
};

const ListingForm = ({ title = "" }: ListingFormProps) => {
	// states
	const [formData, setFormData] = useState({
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
	} = formData;

	// handleClick
	const onChange = () => {
		console.log();
	};

	return (
		<Styled.Wrapper>
			<Form btnText="CREATE LISTING">
				<p>Sell/Rent</p>
				<Styled.ButtonContainer>
					<Button
						type="button"
						value="sale"
						onClick={onChange}
						darkMode={!isSale}
					>
						Sell
					</Button>
					<Button
						type="button"
						value="rent"
						onChange={onChange}
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
						value="true"
						onClick={onChange}
						darkMode={!parking}
					>
						YES
					</Button>
					<Button
						type="button"
						name="parking"
						value="false"
						onChange={onChange}
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
						value="true"
						onClick={onChange}
						darkMode={!furnished}
					>
						YES
					</Button>
					<Button
						type="button"
						name="furnished"
						value="false"
						onChange={onChange}
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
						value="true"
						onClick={onChange}
						darkMode={!offer}
					>
						YES
					</Button>
					<Button
						type="button"
						name="offer"
						value="false"
						onChange={onChange}
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
							value={price}
							onInputChange={(v: number) =>
								setFormData((s) => ({
									...s,
									price: v,
								}))
							}
							min="1"
							max="100"
						/>
						{!isSale && <p> $/ Month</p>}
					</Styled.InputContainer>
				)}
				<FileImageInput
					name="images"
					label={`the first image will be the cover (max: 6)`}
					onInputChange={onChange}
					required
					multiple
				/>
			</Form>
		</Styled.Wrapper>
	);
};

export default ListingForm;
