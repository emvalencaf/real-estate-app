import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme }) => css`
		min-height: 100vh;
		padding-top: ${theme.spacings.hero};
	`}
`;
