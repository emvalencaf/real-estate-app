import styled, { css } from "styled-components";

export const Achor = styled.a`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.tiny};
		color: ${theme.colors.secondary};
		font-size: ${theme.fonts.sizes.normal};
		text-decoration: none;
		transition: all ${theme.transitions.normal} ease-in-out;

		> svg {
			height: ${theme.fonts.sizes.medium};
			width: ${theme.fonts.sizes.medium};
			transition: all ${theme.transitions.slow} ease-in-out;
		}

		&:hover {
			color: ${theme.colors.tertiary};
			filter: brightness(220%);

			> svg {
				transform: scale(1.3);
			}
		}
	`}
`;
