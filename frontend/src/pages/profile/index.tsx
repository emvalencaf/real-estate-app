// template
import ProfileTemplate from "../../templates/Profile";

// components
import PrivateComponent from "../../components/PrivateComponent";

// types
import { GetServerSideProps } from "next";

// utils
import { privateServerSideProps } from "../../utils/private-serverside-props";

export default function ProfilePage() {
	return (
		<PrivateComponent>
			<ProfileTemplate />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
