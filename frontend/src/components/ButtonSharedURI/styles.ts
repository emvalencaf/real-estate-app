import styled, { css } from "styled-components";
import { Button } from "../Button/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		position: fixed;
		top: 17%;
		right: 3%;
		z-index: ${theme.layers.layer6};

		& ${Button} {
			background-color: ${theme.colors.deepWhite};
			color: ${theme.colors.deepBlack};
			padding: ${theme.spacings.xxsmall};
			& svg {
				color: ${theme.colors.deepBlack};
			}
			border: 2px solid ${theme.colors.gray5};
		}
	`}
`;

export const Feedback = styled.div`
	${({ theme }) => css`
		position: fixed;
		top: 20%;
		right: 5%;
		z-index: ${theme.layers.layer6};
		& p {
			font-weight: 600;
			background-color: ${theme.colors.deepWhite};
			padding: ${theme.spacings.small};
			border-radius: ${theme.spacings.tiny};
			border: 2px solid ${theme.colors.gray5};
		}
	`}
`;
