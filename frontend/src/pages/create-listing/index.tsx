// template
import CreateListingTemplate from "../../templates/CreateListing";

// components
import PrivateComponent from "../../components/PrivateComponent";

// types
import { GetServerSideProps } from "next";

// utils
import { privateServerSideProps } from "../../utils/private-serverside-props";

export default function CreateListingPage() {
	return (
		<PrivateComponent>
			<CreateListingTemplate />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
