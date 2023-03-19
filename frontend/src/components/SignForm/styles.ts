import styled, { css } from "styled-components";
import { Achor } from "../Achor/styles";
import { Button } from "../Button/styles";
import { Form } from "../Form/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(240, 253, 244);
	`}
`;

export const Section = styled.section`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	`}
`;

export const Container = styled.div`
	${({ theme }) => css`
		& ${Form} {
			width: 100%;
			gap: ${theme.spacings.tiny};
			background-color: transparent;
		}
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.xxlarge};
	`}
`;

export const PictureContainer = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqLarge} {
			width: 50%;
		}
		@media ${theme.media.lteOrEqMedium} {
			width: 100%;
			padding: ${theme.spacings.small};
		}
	`}
`;

export const LoginContainer = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqLarge} {
			width: 50%;
		}
		@media ${theme.media.lteOrEqMedium} {
			width: 100%;
			padding: ${theme.spacings.small};
		}
		& ${Form} {
			& ${Button} {
				background-color: blue;
				text-transform: uppercase;
				font-size: ${theme.fonts.sizes.small};
				font-weight: 500;
				color: ${theme.colors.deepWhite};
			}
		}
	`}
`;

export const LinksContainer = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqMedium} {
			font-size: ${theme.fonts.sizes.xsmall};
		}
		display: flex;
		font-size: ${theme.fonts.sizes.normal};
		justify-content: space-between;
		gap: ${theme.spacings.mediumSmall};

		& p {
			display: flex;
			gap: ${theme.spacings.tiny};
		}

		& ${Achor} {
			color: rgba(255, 0, 0);
			&:hover {
				color: rgb(200, 0, 0);
			}
		}
	`}
`;

export const Separator = styled.div`
	${({ theme }) => css`
		& span {
			text-align: center;
			font-weight: 500;
			text-transform: uppercase;
			margin: ${theme.spacings.small};
		}

		display: flex;
		justify-content: end;
		align-items: center;
		&::before {
			content: "";
			width: 100%;
			border: 1px solid ${theme.colors.gray3};
		}
		&::after {
			content: "";
			width: 100%;
			border: 1px solid ${theme.colors.gray3};
		}
	`}
`;
