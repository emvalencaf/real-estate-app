import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme }) => css`
		padding-top: ${theme.spacings.hero};
	`}
`;
