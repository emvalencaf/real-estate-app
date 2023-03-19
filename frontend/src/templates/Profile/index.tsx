// hooks
import { useState } from "react";
import { useSession } from "next-auth/react";

// components
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import TextInput from "../../components/TextInput";

// styles
import * as Styled from "./styles";

// types
export type ProfileTemplateProps = {
	title: "";
};

// mock
import mock from "../Home/mock";
import ProfileForm from "../../components/ProfileForm";
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

	const { name, email } = formData;

	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
			<Styled.Section>
				<Heading size="big" weight="bold">
					My Profile
				</Heading>
				<ProfileForm>
					<TextInput
						name="name"
						type="text"
						value={name}
						label="change user's name"
						onInputChange={(v: string) =>
							setFormData((state) => ({
								...state,
								name: v,
							}))
						}
						disabled
					/>
					<TextInput
						name="email"
						type="email"
						value={email}
						label="change user's email"
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
