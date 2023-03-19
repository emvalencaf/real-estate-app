import styled, { css } from "styled-components";
import { Achor } from "../Achor/styles";
import { Form } from "../Form/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		& ${Form} {
			width: 100%;
			background-color: transparent;
		}
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

			& span {
				color: rgba(255, 0, 0);
				transition: ${theme.transitions.normal};
				cursor: pointer;
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
