import styled, { css } from "styled-components";
import { Button } from "../Button/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		padding: ${theme.spacings.small};
		& ${Button} {
			width: 100%;
			font-size: ${theme.fonts.sizes.small};
			color: ${theme.colors.deepWhite};
			text-transform: uppercase;
			background-color: rgb(255, 0, 0);

			&:hover {
				background-color: rgb(240, 0, 0);
			}
			&:active {
				background-color: rgb(235, 0, 0);
			}
		}
	`}
`;
