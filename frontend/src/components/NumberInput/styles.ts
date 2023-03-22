import styled, { css, DefaultTheme } from "styled-components";
import { NumberInputProps } from ".";

const onInputError = (theme: DefaultTheme, errorMessage: string) => css`
	border: ${theme.spacings.xxtiny} solid ${theme.colors.warning};
	box-shadow: 0 0 ${theme.spacings.xtiny} 0 ${theme.colors.warning};
	&:focus {
		border: ${theme.spacings.xxtiny} solid ${theme.colors.warning};
		box-shadow: 0 0 ${theme.spacings.xtiny} 0 ${theme.colors.warning};
	}
	${!!errorMessage &&
	css`
		&:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
			color: ${theme.colors.white};
			background: ${theme.colors.warning};
		}
	`}
`;

export const Wrapper = styled.div`
	${({ theme }) => css`
		width: 100%;
		margin-bottom: ${theme.spacings.large};
	`}
`;

export const InputWrapper = styled.div<Pick<NumberInputProps, "errorMessage">>`
	${({ theme, errorMessage }) => css`
		position: relative;
		span > svg {
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			right: 1rem;
			width: 2.5rem;
			height: 2.5rem;
			color: ${theme.colors.gray6};
			z-index: ${theme.layers.layer1};
			${!!errorMessage &&
			css`
				color: ${theme.colors.warning};
			`}
			pointer-events: auto;
		}
		*:focus ~ svg {
			color: ${theme.colors.primary};
			${!!errorMessage &&
			css`
				color: ${theme.colors.warning};
			`}
		}
		*:disabled ~ svg {
			color: ${theme.colors.gray3};
		}
	`}
`;

export const Input = styled.input<Pick<NumberInputProps, "errorMessage">>`
	${({ theme, errorMessage }) => css`
		border: 1px solid ${theme.colors.gray3};
		width: 100%;
		height: 100%;
		font-size: ${theme.fonts.sizes.normal};
		transition: ${theme.transitions.fast};
		padding: ${theme.spacings.small} ${theme.spacings.xsmall};
		background: ${theme.colors.white};
		padding-right: 3.7rem;
		border-radius: ${theme.spacings.tiny};
		outline: none;
		&::placeholder {
			visibility: hidden;
			opacity: 0;
		}
		&:focus {
			border: ${theme.spacings.xxtiny} solid ${theme.colors.primary};
			box-shadow: 0 0 ${theme.spacings.xtiny} 0 ${theme.colors.primary};
			background: ${theme.colors.white};
		}
		&:focus
			+ ${Label},
			&:not(:placeholder-shown)
			+ ${Label},
			&:-webkit-autofill
			+ ${Label} {
			top: 0;
			transform: translate(0, -50%);
			font-size: ${theme.fonts.sizes.xsmall};
			color: ${theme.colors.white};
			background: ${theme.colors.primary};
		}
		&:disabled {
			background: ${theme.colors.gray1};
			color: ${theme.colors.gray5};
		}
		&:disabled + ${Label} {
			background: ${theme.colors.gray5};
			color: ${theme.colors.gray2};
		}
		${!!errorMessage && onInputError(theme, errorMessage)}
	`}
`;

export const Label = styled.label`
	${({ theme }) => css`
		display: inline;
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		left: ${theme.spacings.xsmall};
		font-size: ${theme.fonts.sizes.small};
		height: ${theme.fonts.sizes.small};
		transition: ${theme.transitions.fast};
		background: ${theme.colors.white};
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		line-height: 1;
		z-index: ${theme.layers.layer1};
		color: ${theme.colors.gray6};
		border-radius: ${theme.spacings.tiny};
	`}
`;

export const ErrorMessage = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.warning};
		margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.large};
	`}
`;