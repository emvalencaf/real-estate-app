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
	toastSuccess?: boolean;
	toastSuccessMessage?: string;
};

// icons
import { HouseAdd } from "@styled-icons/bootstrap";

const ProfileForm = ({
	children,
	handleClick,
	changeDetails = false,
	handleSubmit,
	toastSuccess = false,
	toastSuccessMessage = "",
}: ProfileFormProps) => {
	return (
		<Styled.Wrapper>
			<Form
				toastSuccess={toastSuccess}
				toastSuccessMessage={toastSuccessMessage}
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
			<Styled.ButtonContainer>
				<Button>
					<Achor
						link="/create-real-estate"
						icon={<HouseAdd />}
						target="_self"
					>
						Sell or Rent your home
					</Achor>
				</Button>
			</Styled.ButtonContainer>
		</Styled.Wrapper>
	);
};

export default ProfileForm;
