import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

const toggleMode = (darkmode: boolean, theme: DefaultTheme) => css`
	${darkmode
		? `
		background-color: ${theme.colors.deepWhite} !important;
		color: ${theme.colors.deepBlack} !important;
		`
		: `
		background-color: rbg(20, 10, 200) !important;
		color: ${theme.colors.deepWhite} !important;
	`}
`;

export const Button = styled.button<Pick<ButtonProps, "color" | "darkMode">>`
	${({ theme, color, darkMode }) => css`
		${typeof darkMode !== "undefined" && toggleMode(darkMode, theme)}
		background: ${theme.colors[color]};
		border: none;
		color: ${theme.colors.deepWhite};
		font-size: ${theme.fonts.sizes.normal};
		padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
		cursor: pointer;
		border-radius: ${theme.spacings.tiny};
		transition: all ${theme.transitions.fast} ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		&:focus {
			outline: none;
			box-shadow: 0 0 ${theme.spacings.tiny} ${theme.colors[color]};
			filter: brightness(110%);
		}
		&:hover {
			filter: brightness(90%);
		}
		&:disabled {
			background: ${theme.colors.gray4};
			color: ${theme.colors.gray1};
			cursor: not-allowed;
			&:hover {
				filter: none;
			}
		}
		> svg {
			width: 2rem;
			height: 2rem;
			margin-left: 1rem;
			margin-right: 1rem;
		}
	`}
`;

export const ButtonLabel = styled.span`
	${() => css``}
`;
