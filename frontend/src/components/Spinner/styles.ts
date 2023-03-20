import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme }) => css`
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		z-index: ${theme.layers.aboveAll};
		background-color: rgba(0, 0, 0, 0.35);
	`}
`;

export const Image = styled.img`
	${({ theme }) => css``}
`;
