import styled, { css, DefaultTheme } from "styled-components";

type AchorProps = {
	theme: DefaultTheme;
	disabled?: boolean;
};

export const Achor = styled.a<AchorProps>`
	${({ theme, disabled = false }) => css`
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.tiny};
		color: ${theme.colors.secondary};
		text-decoration: none;
		transition: all ${theme.transitions.normal} ease-in-out;
		${disabled && "pointer-events: none;"};
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
