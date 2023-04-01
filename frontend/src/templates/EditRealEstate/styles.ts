import styled, { css } from "styled-components";

export const Wrapper = styled.main`
	${({ theme }) => css`
		padding-top: ${theme.spacings.hero};
	`}
`;
