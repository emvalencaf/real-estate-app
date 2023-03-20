import styled, { css } from "styled-components";
import { Achor } from "../Achor/styles";
import { Button } from "../Button/styles";
import { Form } from "../Form/styles";

export const Wrapper = styled.div`
	${() => css`
		& ${Form} {
			width: 80%;
			background-color: transparent;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
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

			& ${Button} {
				@media ${theme.media.lteOrEqMedium} {
					font-size: ${theme.fonts.sizes.xsmall};
				}
				color: rgba(255, 0, 0);
				transition: ${theme.transitions.normal};
				background-color: transparent;
				padding: 0;
				margin: 0;
				border: none;
				box-shadow: none;
				&:hover {
					color: rgb(200, 0, 0);
				}
			}
		}

		& ${Achor} {
			color: blue;
			&:hover {
				color: darkblue;
			}
		}
	`}
`;

export const ButtonContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80%;

		& ${Button} {
			background-color: darkblue;
			color: ${theme.colors.deepWhite};
			& ${Achor} {
				color: inherit;
				gap: ${theme.spacings.small};
				width: 100%;
			}
			> span {
				width: 100%;
			}
			width: 100%;
			&:hover {
				& ${Achor} > svg {
					transform: scale(1.3);
				}
			}
		}
	`}
`;
