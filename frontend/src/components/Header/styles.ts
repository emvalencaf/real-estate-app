import styled, { css } from "styled-components";

export const Header = styled.header`
	${({ theme }) => css`
		position: fixed;
		display: flex;
		width: 100%;
		justify-content: space-around;
		align-items: center;
		padding: 0px ${theme.spacings.xsmall};
		margin: auto;
		background-color: ${theme.colors.deepWhite};
		border-bottom: 1px solid transparent;
		box-shadow: 0px 0px 10px black;
		top: 0;
		right: 0;
		left: 0;
		z-index: ${theme.layers.layer6};
	`}
`;
