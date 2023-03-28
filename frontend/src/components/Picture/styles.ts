import styled, { css } from "styled-components";

export const Picture = styled.picture`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		width: 100%;
		max-width: 500px;
		object-fit: cover;
		& img {
			width: 100%;
			border-radius: ${theme.spacings.small};
			object-fit: cover;
		}
	`}
`;
