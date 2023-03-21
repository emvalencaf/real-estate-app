import styled, { css } from "styled-components";
import { Button } from "../Button/styles";
import { Form } from "../Form/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		> p {
			font-weight: 600;
			margin: 0;
			padding: 0;
		}
		width: 100%;
		& ${Form} {
			background-color: transparent;
			gap: ${theme.spacings.small}
			width: 100%;
		}
	`}
`;

export const ButtonContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		margin: 0;
		padding: 0;
		gap: ${theme.spacings.small};
		width: 100%;

		& ${Button} {
			color: ${theme.colors.deepBlack};
			width: 100%;
		}
	`}
`;

export const InputContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: ${theme.spacings.large};
		width: 50%;
		margin: 0;
		padding: 0;
		> p {
			width: 50%;
		}
	`}
`;
