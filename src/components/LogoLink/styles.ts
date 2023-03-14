import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme }) => css`
		& picture,
		img {
			height: ${theme.fonts.sizes.xsmall};
		}
	`}
`;
