import styled, { css } from "styled-components";
import { Title } from "../../components/Heading/styles";

export const Wrapper = styled.main`
	${({ theme }) => css`
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgba(240, 253, 244);
		& ${Title} {
			text-align: center;
			color: ${theme.colors.deepBlack};
			padding-top: ${theme.spacings.xhuge};
		}
		padding-top: ${theme.spacings.hero};
	`}
`;
export const Section = styled.section`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: ${theme.frameSizes.large};
	`}
`;

export const RealEstateListContainer = styled.section`
	${({ theme }) => css`
		width: 100%;
	`}
`;
