import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme }) => css``}
`;

export const Nav = styled.nav`
	${({ theme }) => css``}
`;

export const Ul = styled.ul`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;
		gap: ${theme.spacings.mediumSmall};
		margin: 0;
		padding: 0;
	`}
`;
