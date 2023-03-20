// hooks
import { useState } from "react";
import { useSession } from "next-auth/react";
// controller
import UserController from "../../api/controllers/user";

// components
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import TextInput from "../../components/TextInput";
import ProfileForm from "../../components/ProfileForm";

// styles
import * as Styled from "./styles";

// types
import { UserUpdateProfileFn } from "../../shared-types/user";
export type ProfileTemplateProps = {
	title: "";
};

// mock
import mock from "../Home/mock";

const ProfileTemplate = () => {
	// session
	const { data } = useSession();
	// states
	const [formData, setFormData] = useState({
		name: data.user.name,
		email: data.user.email,
	});
	const [changeDetails, setChangeDetails] = useState<boolean>(false);

	const { name, email } = formData;

	// handleSubmit
	const handleSubmit = async () => {
		if (!changeDetails) return;
		const currentUserName = data.user.name;
		const response = await UserController.updateProfile(
			name,
			currentUserName,
			data.user.id,
			data.accessToken
		);

		if (response.success) data.user.name = name;
	};

	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
			<Styled.Section>
				<Heading size="big" weight="bold">
					My Profile
				</Heading>
				<ProfileForm
					handleClick={() => setChangeDetails((state) => !state)}
					handleSubmit={handleSubmit as UserUpdateProfileFn}
					changeDetails={changeDetails}
					toastSuccess
					toastSuccessMessage="Profile was successfully updated"
				>
					<TextInput
						name="name"
						type="text"
						value={name}
						label={changeDetails ? "change name" : "name"}
						onInputChange={(v: string) =>
							setFormData((state) => ({
								...state,
								name: v,
							}))
						}
						disabled={!changeDetails}
					/>
					<TextInput
						name="email"
						type="email"
						value={email}
						label="email"
						onInputChange={(v: string) =>
							setFormData((state) => ({
								...state,
								email: v,
							}))
						}
						disabled
					/>
				</ProfileForm>
			</Styled.Section>
		</Styled.Wrapper>
	);
};

export default ProfileTemplate;
