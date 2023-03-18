// hooks
import { useState } from "react";
import { toast } from "react-toastify";
import UserController from "../../api/controllers/user";

// components
import SignForm from "../../components/SignForm";
import TextInput from "../../components/TextInput";
import { UserFogotPasswordFn } from "../../shared-types/user";

// styles
import * as Styled from "./styles";

// types
export type FogotPasswordTemplateProps = {
	title?: string;
};

const FogotPasswordTemplate = () => {
	const [email, setEmail] = useState<string>("");

	const handleSubmit = async () => {
		const response = await UserController.fogotPassword(email);

		toast("An email was sent to the user's email ");
		return response;
	};

	return (
		<Styled.Wrapper>
			<SignForm
				action="fogotPassword"
				btnSubmitText="send reset email"
				handleSubmit={handleSubmit as UserFogotPasswordFn}
			>
				<TextInput
					label="set your user's email adress"
					type="email"
					value={email}
					name="email"
					onInputChange={(v: string) => setEmail(v)}
				/>
			</SignForm>
		</Styled.Wrapper>
	);
};

export default FogotPasswordTemplate;
