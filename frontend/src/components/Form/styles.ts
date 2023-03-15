import styled, { css, DefaultTheme } from "styled-components";
import { Button } from "../Button/styles";

type AlertProps = {
	theme: DefaultTheme;
	isSuccess?: boolean;
	visible?: boolean;
};

export const Form = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: ${theme.spacings.medium};
		width: 100%;
		max-width: 100rem;
		padding: ${theme.spacings.small};
		border-radius: 0rem 2rem 2rem;
		background-color: ${theme.colors.deepWhite};
		}
	`}
`;

export const ContainerButton = styled.div`
	${() => css`
		align-self: flex-end;
	`}
`;

export const Alert = styled.div<AlertProps>`
	${({ theme, isSuccess = false, visible = false }) => css`
		position: fixed;
		display: ${visible ? "flex" : "none"};
		top: 0;
		left: 0;
		right: 0;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.quaternary};
		background-color: ${isSuccess
			? theme.colors.success
			: theme.colors.warning};
		padding: ${theme.spacings.small};
		border-radius: 0 0 0.4rem 0.4rem;
		z-index: ${theme.layers.layer7};
		transition: all ${theme.transitions.slow} ease-in-out;
		gap: ${theme.spacings.tiny};

		& a {
			color: ${theme.colors.quaternary};
		}

		> span {
			display: flex;
			gap: ${theme.spacings.xxsmall};
		}

		& ${Button} {
			position: fixed;
			align-self: flex-end;
			padding: 0px;
			margin: 0px;
			top: 0.2rem;
			right: 0.2rem;
			> svg {
				width: 2rem;
				height: 2rem;
			}
		}
	`}
`;

export const CloseButton = styled.span`
	${({ theme }) => css`
		position: fixed;
		align-self: flex-end;
		padding: 0px;
		margin: 0px;
		top: 0.2rem;
		right: 0.2rem;
		background-color: ${theme.colors.quaternary};
		> svg {
			width: 2rem;
			height: 2rem;
			color: ${theme.colors.secondary};
		}
	`}
`;
