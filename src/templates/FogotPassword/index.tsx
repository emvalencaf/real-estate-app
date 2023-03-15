// hooks
import { useState } from "react";

// components
import SignForm from "../../components/SignForm";
import TextInput from "../../components/TextInput";

// styles
import * as Styled from "./styles";

// types
export type FogotPasswordTemplateProps = {
	title?: string;
};

const FogotPasswordTemplate = () => {
	const [email, setEmail] = useState<string>("");
	return (
		<Styled.Wrapper>
			<SignForm action="fogotPassword" btnSubmitText="send reset email">
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
