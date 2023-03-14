import styled, { css } from "styled-components";

export const Header = styled.header`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: ${theme.spacings.xxsmall};
	`}
`;
