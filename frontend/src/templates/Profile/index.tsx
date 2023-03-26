// hooks
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { useSession } from "next-auth/react";

// controller
import UserController from "../../api/controllers/user";
import RealEstateController from "../../api/controllers/realEstate";

// components
import ListingRealEstate from "../../components/ListingRealEstate";
import Heading from "../../components/Heading";
import TextInput from "../../components/TextInput";
import ProfileForm from "../../components/ProfileForm";

// styles
import * as Styled from "./styles";

// types
import { UserUpdateProfileFn } from "../../shared-types/user";
import {
	RealEstateGetResponse,
	RealEstateModel,
} from "../../shared-types/realestate";
import Spinner from "../../components/Spinner";

const ProfileTemplate = () => {
	// session
	const { data } = useSession();
	// states
	const [formData, setFormData] = useState({
		name: data.user.name,
		email: data.user.email,
	});
	const [changeDetails, setChangeDetails] = useState<boolean>(false);
	const {
		data: dataRealEstateList,
		isLoading: isFetchLoading,
		error: errorFetch,
	} = useFetch<RealEstateGetResponse<RealEstateModel[]>>({
		url: data.user.id,
		cb: RealEstateController.getAllFromUser,
	});

	// destructured formData state
	const { name, email } = formData;

	if (isFetchLoading) return <Spinner />;

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
			<Styled.Section>
				{!isFetchLoading &&
					dataRealEstateList?.data &&
					dataRealEstateList.data.length > 0 && (
						<ListingRealEstate
							realEstateList={dataRealEstateList.data}
						/>
					)}
			</Styled.Section>
		</Styled.Wrapper>
	);
};

export default ProfileTemplate;
