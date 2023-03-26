// hooks
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
// controller
import UserController from "../../api/controllers/user";

// components
import Heading from "../../components/Heading";
import TextInput from "../../components/TextInput";
import ProfileForm from "../../components/ProfileForm";

// styles
import * as Styled from "./styles";

// types
import { UserUpdateProfileFn } from "../../shared-types/user";
import RealEstateController from "../../api/controllers/realEstate";
import { RealEstateModel } from "../../shared-types/realestate";
export type ProfileTemplateProps = {
	title: "";
};

const ProfileTemplate = () => {
	// session
	const { data } = useSession();
	// states
	const [formData, setFormData] = useState({
		name: data.user.name,
		email: data.user.email,
	});
	const [changeDetails, setChangeDetails] = useState<boolean>(false);
	const [realEstateList, setRealEstateList] = useState<RealEstateModel[]>([]);

	const { name, email } = formData;

	useEffect(() => {
		if (!data) return;

		const getRealEstateList = async () => {
			const response = await RealEstateController.getAllFromUser(
				data.user.id
			);
			const { data: realEstateList } = response;
			setRealEstateList(() => [...realEstateList]);
			console.log(realEstateList);
		};
	}, []);

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
			<Heading size="big" weight="bold">
				My Profile
			</Heading>
			<Styled.Section>
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
