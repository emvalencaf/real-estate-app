// hooks
import { useFetch } from "../../hooks/useFetch";

// template
import EditRealEstateTemplate from "../../templates/EditRealEstate";

// components
import Spinner from "../../components/Spinner";

// controllers
import RealEstateController from "../../api/controllers/realEstate";

// types
import { GetServerSideProps } from "next";
import {
	RealEstateGetResponse,
	RealEstateModel,
} from "../../shared-types/realestate";
import { privateServerSideProps } from "../../utils/private-serverside-props";

export default function EditRealEstatePage({
	id,
}: Pick<RealEstateModel, "id">) {
	// fetch real estate data by it's id
	const { data: responseData, isLoading } = useFetch<
		RealEstateGetResponse<RealEstateModel>
	>({
		url: id,
		cb: RealEstateController.getById,
	});

	console.log(responseData?.data && responseData.data);

	// while isn't fetch will render a loading page
	if (isLoading) return <Spinner />;

	return <EditRealEstateTemplate realEstate={responseData.data} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx, async () => {
		const { id } = ctx.params;

		return {
			props: {
				id,
			},
		};
	});
};
