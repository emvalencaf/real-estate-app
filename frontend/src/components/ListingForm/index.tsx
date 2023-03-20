// styles
import { useState } from "react";
import Button from "../Button";
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
		type: "rent",
		name: "",
		beds: 0,
		bathrooms: 0,
	});

	const { name, beds, bathrooms } = formData;

	// handleClick
	const onChange = () => {
		console.log();
	};

	return (
		<Styled.Wrapper>
			<Form>
				<p>Sell/Rent</p>
				<Styled.ButtonContainer>
					<Button
						type="button"
						value="sale"
						onClick={onChange}
						typeListing={formData.type as "rent" | "sale"}
					>
						Sell
					</Button>
					<Button
						type="button"
						value="rent"
						onChange={onChange}
						typeListing={formData.type as "rent" | "sale"}
					>
						Rent
					</Button>
				</Styled.ButtonContainer>
				<TextInput
					name="name"
					label="name"
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
					name="beds"
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
			</Form>
		</Styled.Wrapper>
	);
};

export default ListingForm;
