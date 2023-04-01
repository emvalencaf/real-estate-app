import styled, { css } from "styled-components";

export const Wrapper = styled.main`
	${({ theme }) => css`
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgba(240, 253, 244);
		padding-top: ${theme.spacings.hero};
	`}
`;
