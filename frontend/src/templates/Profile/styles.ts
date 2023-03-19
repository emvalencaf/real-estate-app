import styled, { css } from "styled-components";
import { Title } from "../../components/Heading/styles";

export const Wrapper = styled.main`
	${({ theme }) => css`
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgba(240, 253, 244);
	`}
`;
export const Section = styled.section`
	${({ theme }) => css`
		& ${Title} {
			text-align: center;
			margin-top: ${theme.spacings.small};
			color: ${theme.colors.deepBlack};
		}
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: ${theme.frameSizes.large};
	`}
`;
