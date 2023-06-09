import styled, { DefaultTheme, css } from "styled-components";

// types
type ImageContainerProps = {
	theme: DefaultTheme;
	url: string;
};

export const Wrapper = styled.main`
	${({ theme }) => css`
		& .swiper-button-next:after,
		& .swiper-button-prev:after {
			color: #a8dadc;
		}

		& .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
			color: #a8dadc !important;
		}
		background-color: rgba(240, 253, 244);
		padding-top: ${theme.spacings.hero};
	`}
`;

export const ImageContainer = styled.div<ImageContainerProps>`
	${({ url }) => css`
		background: url(${url}) center no-repeat;
		background-size: cover;
		height: 300px;
		width: 100%;
		overflow: hidden;
	`}
`;
