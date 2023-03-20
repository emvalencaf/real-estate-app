import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

const setStyleTypeListing = (
	typeListing: "rent" | "sale",
	theme: DefaultTheme
) => css`
	${typeListing === "rent"
		? `
		background-color: rbg(20, 10, 200) !important;
		color: ${theme.colors.deepWhite} !important;
	`
		: `
		background-color: ${theme.colors.deepWhite} !important;
		color: ${theme.colors.deepBlack} !important;
	`}
`;

export const Button = styled.button<Pick<ButtonProps, "color" | "typeListing">>`
	${({ theme, color, typeListing }) => css`
		${typeListing && setStyleTypeListing(typeListing, theme)}
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
