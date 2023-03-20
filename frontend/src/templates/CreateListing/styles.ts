import styled, { css } from "styled-components";
import { Title } from "../../components/Heading/styles";

export const Wrapper = styled.main`
	${({ theme }) => css`
		background-color: rgba(240, 253, 244);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		& ${Title} {
			color: ${theme.colors.deepBlack};
			padding-top: ${theme.spacings.xhuge};
		}
	`}
`;
