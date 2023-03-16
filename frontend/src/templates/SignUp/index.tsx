// hooks
import { useState } from "react";

// components
import Header from "../../components/Header";
import SignForm from "../../components/SignForm";
import TextInput from "../../components/TextInput";

// controller api
import UserController from "../../api/controllers/user";

// styles
import * as Styled from "./styles";

// icons
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap";

// types
import { UserFormData, UserSignUpFn } from "../../shared-types/user";

// mock
import mock from "./mock";

const SignUpTemplate = () => {
	// states
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] =
		useState<boolean>(false);
	const [formData, setFormData] = useState<UserFormData>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { name, email, password, confirmPassword } = formData;

	// onSubmit handle
	const handleSubmit = async () => {

		const response = await UserController.signUp({
			name,
			email,
			password,
			confirmPassword,
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
				btnSubmitText="sign up"
				srcImg={mock.srcImg}
				action="signUp"
				handleSubmit={handleSubmit as UserSignUpFn}
				redirect
				redirectUrl="/"
			>
				<TextInput
					label="set your your name"
					type="text"
					value={name}
					name="name"
					onInputChange={(v: string) =>
						setFormData((state) => ({
							...state,
							name: v,
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
							...state,
							confirmPassword: v,
						}))
					}
				/>
			</SignForm>
		</Styled.Wrapper>
	);
};

export default SignUpTemplate;
