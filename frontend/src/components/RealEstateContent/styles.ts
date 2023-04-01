import styled, { DefaultTheme, css } from "styled-components";
import { Title } from "../Heading/styles";

type LabelProps = {
	theme: DefaultTheme;
	isOffer: boolean;
};

export const Wrapper = styled.div`
	${({ theme }) => css`
		@media ${theme.media.gteOrEqLarge} {
			gap: ${theme.spacings.medium};
		}
		@media ${theme.media.lteOrEqMedium} {
			flex-direction: column;
		}
		@media ${theme.media.lteOrEqSmall} {
			padding: 0;
		}
		display: flex;
		max-width: ${theme.frameSizes.max};
		margin: auto;
		align-items: center;
		padding: ${theme.spacings.medium};
		p {
			margin: 0px;
			& span {
				font-weight: 600;
			}
		}
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		@media ${theme.media.gteOrEqLarge} {
			height: 400px;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.mediumSmall};
		width: 100%;
		height: 200px;
		background-color: ${theme.colors.deepWhite};
		& ${Title} {
			padding-left: ${theme.spacings.mediumLarge};
			color: darkblue;
			margin: 0px;
		}
		p {
			width: 100%;
		}
	`}
`;

export const Address = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		width: 100%;
		padding-left: ${theme.spacings.mediumSmall};
		gap: 1px;
		overflow: hidden;
		text-overflow: ellipsis;
		svg {
			width: ${theme.fonts.sizes.normal};
			height: ${theme.fonts.sizes.normal};
			color: green;
		}
	`}
`;

export const Labels = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: start;
		align-items: center;
		width: 100%;
		justify-content: center;
		gap: ${theme.spacings.small};
	`}
`;

export const Label = styled.p<LabelProps>`
	${({ theme, isOffer }) => css`
		width: 100%;
		max-width: 200px;
		color: ${theme.colors.deepWhite};
		font-weight: 600;
		text-align: center;
		margin: 0px;
		padding: ${theme.spacings.small} ${theme.spacings.mediumSmall};
		border-radius: ${theme.spacings.xxsmall};
		background-color: ${isOffer ? "darkgreen" : "crimson"};
	`}
`;

export const Map = styled.div`
	${({ theme }) => css`
		@media ${theme.media.gteOrEqLarge} {
			height: 400px;
		}
		width: 100%;
		height: 200px;
		background-color: green;
		z-index: ${theme.layers.layer6};
		overflow-x: hidden;
	`}
`;

export const DetailsList = styled.ul`
	${({ theme }) => css`
		display: flex;
		width: 100%;
		margin: 0;
		padding: 0;
		gap: ${theme.spacings.mediumSmall};
	`}
`;

export const Item = styled.li`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.spacings.tiny};
		& svg {
			height: ${theme.spacings.medium};
			width: ${theme.spacings.medium};
		}
	`}
`;
