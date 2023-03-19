// hooks
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

// components
import TextInput from "../../components/TextInput";
import Header from "../../components/Header";
import SignForm from "../../components/SignForm";
import { toast } from "react-toastify";

// styles
import * as Styled from "./styles";

// icons
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap";

// types
import { UserFormData, UserSignInFn } from "../../shared-types/user";

// mock
import mock from "./mock";

const SignInTemplate = () => {
	// router
	const router = useRouter();

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
		if (!email || !password) {
			toast.error("password or email are wrong");
			return null;
		}

		const redirect = router.query?.redirect || "/";

		const response = await signIn("credentials", {
			username: email,
			password,
			redirect: false,
			callbackUrl: redirect as string,
		});

		if (!response) toast.error("password or email are wrong");

		window.location.href = response.url;
	};
	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
			<SignForm
				btnSubmitText="sign in"
				srcImg={mock.srcImg}
				action="signIn"
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
