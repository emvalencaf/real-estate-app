// hooks
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";

// controller
import RealEstateController from "../../api/controllers/realEstate";

// components
import Spinner from "../../components/Spinner";

// styles
import * as Styled from "./styles";

// types
import {
	RealEstateGetResponse,
	RealEstateModel,
} from "../../shared-types/realestate";

// utils
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	EffectFade,
	Autoplay,
	Navigation,
	Pagination,
} from "swiper";
import "swiper/css/bundle";
import ButtonSharedURI from "../../components/ButtonSharedURI";

const RealEstateTemplate = () => {
	// get page's uri params
	const router = useRouter();
	const { categoryName, realEstateId } = router.query;

	// fetched data
	const { data, isLoading, error } = useFetch<
		RealEstateGetResponse<RealEstateModel>
	>({
		url: `${categoryName}/${realEstateId}`,
		cb: RealEstateController.query,
	});
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	if (isLoading) return <Spinner />;

	console.log(data);

	return (
		<Styled.Wrapper>
			<h1> RealEstate </h1>
			<Swiper
				slidesPerView={1}
				navigation
				pagination={{ type: "progressbar" }}
				effect="fade"
				modules={[EffectFade]}
				autoplay={{ delay: 3000 }}
			>
				{data?.data?.images.map((url) => (
					<SwiperSlide key={data.data.id}>
						<Styled.ImageContainer
							url={url}
						></Styled.ImageContainer>
					</SwiperSlide>
				))}
			</Swiper>
			<ButtonSharedURI />
		</Styled.Wrapper>
	);
};

export default RealEstateTemplate;
