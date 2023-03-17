// hooks
import { useState } from "react";

// components
import TextInput from "../../components/TextInput";
import Header from "../../components/Header";
import SignForm from "../../components/SignForm";

// styles
import * as Styled from "./styles";

// icons
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap";

// types
import { UserFormData, UserSignInFn } from "../../shared-types/user";

// mock
import mock from "./mock";
import UserController from "../../api/controllers/user";

const SignInTemplate = () => {
	// states
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [formData, setFormData] = useState<
		Pick<UserFormData, "email" | "password">
	>({
		email: "",
		password: "",
	});
	const { email, password } = formData;
	// onSubmit handle
	const handleSubmit = async () => {
		const response = await UserController.signIn({
			email,
			password,
		});

		if (response.success)
			setFormData(() => ({
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			}));

		return response;
	};
	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
			<SignForm
				btnSubmitText="sign in"
				srcImg={mock.srcImg}
				handleSubmit={handleSubmit as UserSignInFn}
			>
				<TextInput
					label="set your user's email adress"
					type="email"
					value={email}
					name="email"
					onInputChange={(v: string) =>
						setFormData((state) => ({
							...state,
							email: v,
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
							...state,
							password: v,
						}))
					}
				/>
			</SignForm>
		</Styled.Wrapper>
	);
};

export default SignInTemplate;
