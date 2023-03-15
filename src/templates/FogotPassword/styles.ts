import styled, { css } from "styled-components";

export const Wrapper = styled.main`
	${() => css`
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgba(240, 253, 244);
	`}
`;
