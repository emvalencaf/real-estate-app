import styled, { css } from "styled-components";
import { Button } from "../Button/styles";
import { Form } from "../Form/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		> p {
			font-weight: 600;
		}
		width: 100%;
		& ${Form} {
			background-color: transparent;
			width: 100%;
		}
	`}
`;

export const ButtonContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: ${theme.spacings.small};
		width: 100%;

		& ${Button} {
			color: ${theme.colors.deepBlack};
			width: 100%;
		}
	`}
`;
