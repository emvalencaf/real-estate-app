import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme }) => css`
		width: 100vw;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		background-color: ${theme.colors.deepWhite};
	`}
`;
