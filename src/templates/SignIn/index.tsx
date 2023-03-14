// styles
import Form from "../../components/Form";
import Heading from "../../components/Heading";
import TextInput from "../../components/TextInput";
import mock from "./mock";
import * as Styled from "./styles";

// types
export type SignInTemplateProps = {
	title?: string;
};

const SignInTemplate = ({ title = "" }: SignInTemplateProps) => {
	return (
		<Styled.Wrapper>
			<Styled.Section>
				<Heading size="big" weight="bold">
					Sign In
				</Heading>
				<div>
					<picture>
						<img src={mock.srcImg} alt="key" />
					</picture>
				</div>
				<div>
					<Form>ok</Form>
				</div>
			</Styled.Section>
		</Styled.Wrapper>
	);
};

export default SignInTemplate;
