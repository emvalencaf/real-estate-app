import styled, { css } from "styled-components";

export const Header = styled.header`
	${({ theme }) => css`
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: 0px ${theme.spacings.xsmall};
		margin: auto;
		background-color: ${theme.colors.deepWhite};
		border-bottom: 1px solid transparent;
		box-shadow: 0px 0px 10px black;
	`}
`;
