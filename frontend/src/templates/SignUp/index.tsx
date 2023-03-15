// hooks
import { useState } from "react";

import Header from "../../components/Header";
import SignForm from "../../components/SignForm";
import TextInput from "../../components/TextInput";

// styles
import * as Styled from "./styles";

// icons
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap";

// types
import { FormDataSignUpProps } from "../../shared-types/formDataSign";

// mock
import mock from "./mock";

const SignUpTemplate = () => {
	// states
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] =
		useState<boolean>(false);
	const [formData, setFormData] = useState<FormDataSignUpProps>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { name, email, password, confirmPassword } = formData;

	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
			<SignForm
				btnSubmitText="sign up"
				srcImg={mock.srcImg}
				action="signUp"
			>
				<TextInput
					label="set your your name"
					type="text"
					value={name}
					name="name"
					onInputChange={(v: string) =>
						setFormData((state) => ({
							name: v,
							...state,
						}))
					}
				/>
				<TextInput
					label="set your user's email adress"
					type="email"
					value={email}
					name="email"
					onInputChange={(v: string) =>
						setFormData((state) => ({
							email: v,
							...state,
						}))
					}
				/>
				<TextInput
					label="set your user's password"
					type={showPassword ? "text" : "password"}
					value={password}
					name="password"
					icon={showPassword ? <EyeSlash /> : <EyeFill />}
					onIconClick={() => setShowPassword((state) => !state)}
					onInputChange={(v: string) =>
						setFormData((state) => ({
							password: v,
							...state,
						}))
					}
				/>
				<TextInput
					label="confirm your user's password"
					type={showConfirmPassword ? "text" : "password"}
					value={confirmPassword}
					name="password"
					icon={showConfirmPassword ? <EyeSlash /> : <EyeFill />}
					onIconClick={() =>
						setShowConfirmPassword((state) => !state)
					}
					onInputChange={(v: string) =>
						setFormData((state) => ({
							confirmPassword: v,
							...state,
						}))
					}
				/>
			</SignForm>
		</Styled.Wrapper>
	);
};

export default SignUpTemplate;
