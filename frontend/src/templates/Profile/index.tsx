// hooks
import { useFetch } from "../../hooks/useFetch";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ProfileTemplate = () => {
	// session
	const { data } = useSession();

	// router
	const router = useRouter();

	// states
	const [formData, setFormData] = useState({
		name: data.user.name,
		email: data.user.email,
	});
	const [changeDetails, setChangeDetails] = useState<boolean>(false);
	// fetch real estate data
	const {
		data: dataRealEstateList,
		isLoading: isFetchLoading,
		error: errorFetch,
	} = useFetch<RealEstateGetResponse<RealEstateModel[]>>({
		url: data.user.id,
		cb: RealEstateController.getAllFromUser,
	});
	const [realEstateList, setRealEstateList] = useState<RealEstateModel[]>([]);

	useEffect(() => {
		if (dataRealEstateList?.data)
			setRealEstateList(dataRealEstateList.data);
	}, [dataRealEstateList]);

	// destructured formData state
	const { name, email } = formData;

	// onDelete
	const handleDelete = async (
		id: string,
		isLoadingDelete: boolean,
		setIsLoadingDelete: Dispatch<SetStateAction<boolean>>
	) => {
		// if operation is loading function will not be call
		if (isLoadingDelete) return;
		const realEstateClickedName = realEstateList.filter(
			(realEstate) => realEstate.id === id
		)[0].name;
		setIsLoadingDelete(true);
		try {
			// will request at server to delete the real estate
			await RealEstateController.delete(id, data.accessToken);

			// feedback to client
			toast.success(`${realEstateClickedName} was succefully deleted`);

			// will update the view
			setRealEstateList((state) => [
				...state.filter((realEstate) => realEstate.id !== id),
			]);
		} catch (err) {
			// feedback to client
			toast.error(
				`${realEstateClickedName} couldn't be delete try again later`
			);
		}
		setIsLoadingDelete(false);
	};

	// onEdit
	const handleEdit = (id: string) => {
		router.push(`/edit-real-estate/${id}`);
	};

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
			<Styled.RealEstateListContainer>
				{!isFetchLoading &&
					dataRealEstateList?.data &&
					dataRealEstateList.data.length > 0 && (
						<ListingRealEstate
							realEstateList={realEstateList}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					)}
			</Styled.RealEstateListContainer>
		</Styled.Wrapper>
	);
};

export default ProfileTemplate;
