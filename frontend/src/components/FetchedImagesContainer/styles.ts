import styled, { css } from "styled-components";
import { Achor } from "../Achor/styles";
import { Button } from "../Button/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		margin: 0;
	`}
`;

export const List = styled.ul`
	${({ theme }) => css`
		list-style: none;
		& li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			> p {
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	`}
`;

export const Container = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: ${theme.spacings.xxsmall};

		& ${Button} {
			padding: ${theme.spacings.xxtiny};
			border-radius: ${theme.spacings.tiny};
		}

		& ${Achor} {
			background: ${theme.colors.quaternary};
			border: none;
			color: ${theme.colors.deepWhite};
			font-size: ${theme.fonts.sizes.normal};
			padding: ${theme.spacings.tiny};
			cursor: pointer;
			border-radius: ${theme.spacings.tiny};
			transition: all ${theme.transitions.fast} ease-in-out;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0;
			&:focus {
				outline: none;
				box-shadow: 0 0 ${theme.spacings.tiny} ${theme.colors.quaternary};
				filter: brightness(110%);
			}
			&:hover {
				filter: brightness(90%);
			}
			&:disabled {
				background: ${theme.colors.gray4};
				color: ${theme.colors.gray1};
				cursor: not-allowed;
			&:hover {
				filter: none;
			}
			& svg {
				width: 2rem;
				height: 2rem;
			}
		}
	`}
`;
