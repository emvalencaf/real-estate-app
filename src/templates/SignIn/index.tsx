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
import { FormDataSignInProps } from "../../shared-types/formDataSign";

// mock
import mock from "./mock";

const SignInTemplate = () => {
	// states
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [formData, setFormData] = useState<FormDataSignInProps>({
		email: "",
		password: "",
	});
	const { email, password } = formData;

	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
			<SignForm btnSubmitText="sign in" srcImg={mock.srcImg}>
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
			</SignForm>
		</Styled.Wrapper>
	);
	/*
		return (
			<Styled.Wrapper>
				<Header logo={mock.settings.logo} menu={mock.settings.menu} />
				<Styled.Section>
					<Heading size="big" weight="bold">
						Sign In
					</Heading>
					<Styled.Container>
						<Styled.PictureContainer>
							<Picture
								srcImg={mock.srcImg}
								altText="a picture of a key"
							/>
						</Styled.PictureContainer>
						<Styled.LoginContainer>
							<Form btnText="Sign in">
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
									onIconClick={() =>
										setShowPassword((state) => !state)
									}
									onInputChange={(v: string) =>
										setFormData((state) => ({
											password: v,
											...state,
										}))
									}
								/>
								<Styled.LinksContainer>
									<p>
										Don&#39;t have an account?
										<Achor link={`/sign-up`}>Register</Achor>
									</p>
									<p>
										Fogot password?
										<Achor link={`/fogot-password`}>
											click here
										</Achor>
									</p>
								</Styled.LinksContainer>
							</Form>
							<Styled.Separator>
								<span>Or</span>
							</Styled.Separator>
							<OAuthGoogleButton />
						</Styled.LoginContainer>
					</Styled.Container>
				</Styled.Section>
			</Styled.Wrapper>
		);*/
};

export default SignInTemplate;
