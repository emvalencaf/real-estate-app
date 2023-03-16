// components
import Form from "../Form";
import Heading from "../Heading";
import Picture from "../Picture";
import Achor from "../Achor";
import OAuthGoogleButton from "../OAuthGoogleButton";

// styles
import * as Styled from "./styles";

type SignFormProps = {
	children: React.ReactNode;
	srcImg?: string;
	btnSubmitText?: string;
	handleSubmit?: <T>() => Promise<T>;
	action?: "signIn" | "signUp" | "fogotPassword";
	redirect?: boolean;
	redirectUrl?: string;
};

const SignForm = ({
	children,
	btnSubmitText = "sign in",
	srcImg = "",
	action = "signIn",
	handleSubmit,
	redirect = false,
	redirectUrl,
}: SignFormProps) => {
	return (
		<Styled.Wrapper>
			<Styled.Section>
				<Heading size="big" weight="bold">
					{action === "signIn" && "Sign in"}
					{action === "signUp" && "Sign up"}
					{action === "fogotPassword" && "Fogot password"}
				</Heading>
				<Styled.Container>
					<Styled.PictureContainer>
						<Picture srcImg={srcImg} altText="a picture of a key" />
					</Styled.PictureContainer>
					<Styled.LoginContainer>
						<Form
							btnText={btnSubmitText}
							onSubmit={handleSubmit}
							asyncOnSubmit
							redirect={redirect}
							redirectUrl={redirectUrl}
						>
							{children}
							<Styled.LinksContainer>
								{action === "signIn" && (
									<>
										<p>
											Don&#39;t have an account?
											<Achor
												link={`/sign-up`}
												target="_self"
											>
												Register
											</Achor>
										</p>
										<p>
											Fogot password?
											<Achor
												link={`/fogot-password`}
												target="_self"
											>
												click here
											</Achor>
										</p>
									</>
								)}
								{action === "signUp" && (
									<>
										<p>
											Have an account?
											<Achor
												link={`/sign-in`}
												target="_self"
											>
												Sign in
											</Achor>
										</p>
										<p>
											Fogot password?
											<Achor
												link={`/fogot-password`}
												target="_self"
											>
												click here
											</Achor>
										</p>
									</>
								)}
								{action === "fogotPassword" && (
									<>
										<p>
											Don&#39;t have an account?
											<Achor
												link={`/sign-up`}
												target="_self"
											>
												Register
											</Achor>
										</p>
										<p>
											Have an account?
											<Achor
												link={`/sign-in`}
												target="_self"
											>
												sign in instead
											</Achor>
										</p>
									</>
								)}
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
	);
};

export default SignForm;
