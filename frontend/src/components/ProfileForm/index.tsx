// components
import Achor from "../Achor";
import Form from "../Form";

// styles
import * as Styled from "./styles";

// types
export type ProfileFormProps = {
	children: React.ReactNode;
};

const ProfileForm = ({ children }: ProfileFormProps) => {
	return (
		<Styled.Wrapper>
			<Form>{children}</Form>
			<Styled.LinksContainer>
				<p>
					Do you want to change your name?
					<span>Edit</span>
				</p>
				<Achor link="">Sign out</Achor>
			</Styled.LinksContainer>
		</Styled.Wrapper>
	);
};

export default ProfileForm;
