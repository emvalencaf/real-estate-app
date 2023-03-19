// components
import Achor from "../Achor";
import Button from "../Button";
import Form from "../Form";

// styles
import * as Styled from "./styles";

// types
export type ProfileFormProps = {
	children: React.ReactNode;
	handleClick: () => void;
	handleSubmit?: <T>() => Promise<T>;
	changeDetails: boolean;
};

const ProfileForm = ({
	children,
	handleClick,
	changeDetails = false,
	handleSubmit,
}: ProfileFormProps) => {
	return (
		<Styled.Wrapper>
			<Form
				asyncOnSubmit
				onSubmit={handleSubmit}
				btnText="Change profile details"
				disabled={!changeDetails}
			>
				{children}
				<Styled.LinksContainer>
					<p>
						Do you want to change your name?
						<Button type="button" onClick={handleClick}>
							{changeDetails ? "Apply changes" : "Edit"}
						</Button>
					</p>
					<Achor link="">Sign out</Achor>
				</Styled.LinksContainer>
			</Form>
		</Styled.Wrapper>
	);
};

export default ProfileForm;
