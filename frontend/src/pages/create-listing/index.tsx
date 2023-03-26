// template
import CreateRealEstateTemplate from "../../templates/CreateRealEstate";

// components
import PrivateComponent from "../../components/PrivateComponent";

// types
import { GetServerSideProps } from "next";

// utils
import { privateServerSideProps } from "../../utils/private-serverside-props";

export default function CreateRealEstatePage() {
	return (
		<PrivateComponent>
			<CreateRealEstateTemplate />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
