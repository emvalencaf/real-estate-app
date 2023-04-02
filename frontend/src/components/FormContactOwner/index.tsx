// hooks
import { useSession } from "next-auth/react";

// controller
import MessageController from "../../api/controllers/messages";

// components
import Button from "../Button";

// styles
import * as Styled from "./styles";

// icons
import { Message, Send } from "@styled-icons/material-outlined";
import { useState } from "react";
import Form from "../Form";
import TextInput from "../TextInput";

// types
export type FormContactOwnerProps = {
	ownerId?: string;
};

const FormContactOwner = ({ ownerId = "" }: FormContactOwnerProps) => {
	// get session
	const { data: session } = useSession();

	// states
	const [showForm, setShowForm] = useState<boolean>(false);
	const [contactMessage, setContactMessage] = useState<string>("");

	// handleSubmit
	const handleSubmit = async () => {
		console.log(contactMessage);
		await MessageController.contactLandLord(
			session?.user?.id,
			contactMessage,
			session?.accessToken,
			ownerId
		);
		setShowForm(false);
		return null;
	};

	return (
		<Styled.Wrapper>
			{session && session.user.id !== ownerId && !showForm ? (
				<Button
					icon={<Message />}
					onClick={() => setShowForm((state) => !state)}
				>
					Contact Landlord
				</Button>
			) : (
				<Form
					btnIcon={<Send />}
					onSubmit={handleSubmit}
					asyncOnSubmit
					toastSuccess
					toastSuccessMessage="Your message was succeffully delivered to the landlord soon he will answer you"
				>
					<TextInput
						name="contact"
						value={contactMessage}
						label={"contact owner"}
						onInputChange={(v: string) => setContactMessage(v)}
						as="textarea"
					/>
				</Form>
			)}
		</Styled.Wrapper>
	);
};

export default FormContactOwner;
