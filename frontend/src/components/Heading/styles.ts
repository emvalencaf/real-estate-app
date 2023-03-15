import styled, { css, DefaultTheme } from "styled-components";
import { HeadingProps } from ".";

const titleSize = {
	small: (theme: DefaultTheme, size: string) => css`
		font-size: ${theme.fonts.sizes.medium};
		${mediaFont(theme, size)};
	`,
	medium: (theme: DefaultTheme, size: string) => css`
		font-size: ${theme.fonts.sizes.large};
		${mediaFont(theme, size)};
	`,
	big: (theme: DefaultTheme, size: string) => css`
		font-size: ${theme.fonts.sizes.xlarge};
		${mediaFont(theme, size)};
	`,
	huge: (theme: DefaultTheme, size: string) => css`
		font-size: ${theme.fonts.sizes.xhuge};
		${mediaFont(theme, size)};
	`,
};

const mediaFont = (theme: DefaultTheme, size: string) => {
	const fontSize = {
		lteSmall: {
			huge: theme.fonts.sizes.large,
			big: theme.fonts.sizes.medium,
			medium: theme.fonts.sizes.small,
			small: theme.fonts.sizes.xsmall,
		},
		lteMedium: {
			huge: theme.fonts.sizes.xlarge,
			big: theme.fonts.sizes.large,
			medium: theme.fonts.sizes.medium,
			small: theme.fonts.sizes.small,
		},
	};
	return css`
		@media ${theme.media.lteOrEqMedium} {
			font-size: ${fontSize.lteSmall[size]};
		}
		@media ${theme.media.lteOrEqMedium} {
			font-size: ${fontSize.lteMedium[size]};
		}
	`;
};

const titleCase = (uppercase: boolean) => css`
	text-transform: ${uppercase ? "uppercase" : "none"};
`;

const titleWeight = (weight: string) => css`
	font-weight: ${weight};
`;

export const Title = styled.h1<HeadingProps>`
	${({ theme, size, uppercase, color, weight }) => css`
		color: ${theme.colors[color]};
		line-height: 1.2;
		${titleSize[size](theme, size)};
		${titleCase(uppercase)};
		${titleWeight(weight)}
	`}
`;
