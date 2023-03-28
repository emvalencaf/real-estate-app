import styled, { css } from "styled-components";
import { Button } from "../Button/styles";
import { Picture } from "../Picture/styles";

export const Item = styled.li`
	${({ theme }) => css`
		list-style: none;
		/*
		& a {
			text-decoration: none;
			position: relative;
			background-color: ${theme.colors.deepWhite};
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			border-radius: ${theme.spacings.xsmall};
			overflow: hidden;
			transition: all ${theme.transitions.normal} ease-in-out;
			width: 100%;
			& p {
				margin: ${theme.spacings.tiny};
			}
		}

		& ${Picture} {
			width: 100%;
			transition: all ${theme.transitions.slower} ease-in-out;
			& img {
				height: ${theme.frameSizes.small};
				&:hover {
					transform: scale(1.2);
				}
			}
		}*/
	`}
`;

export const ItemContainer = styled.div`
	${({ theme }) => css`
		text-decoration: none;
		position: relative;
		background-color: ${theme.colors.deepWhite};
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		border-radius: ${theme.spacings.xsmall};
		overflow: hidden;
		transition: all ${theme.transitions.normal} ease-in-out;
		width: 100%;
		max-width: 380px;
		& p {
			margin: ${theme.spacings.tiny};
		}
		& a {
			width: 100%;
			margin: 0;
			padding: 0;
		}
		& ${Picture} {
			width: 100%;
			transition: all ${theme.transitions.slower} ease-in-out;
			& img {
				width: 100%;
				height: ${theme.frameSizes.small};
				&:hover {
					transform: scale(1.2);
				}
			}
		}
	`}
`;

export const MomentContainer = styled.div`
	${({ theme }) => css`
		position: absolute;
		top: 0;
		left: 0;
		background-color: #3377cc;
		color: ${theme.colors.deepWhite};
		font-weight: 600;
		border-radius: ${theme.spacings.small};
		padding: ${theme.spacings.small};
	`}
`;

export const CardDetails = styled.div`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.spacings.xsmall};
	`}
`;

export const Name = styled.p`
	${({ theme }) => css`
		overflow: hidden;
		font-size: ${theme.fonts.sizes.large};
		margin: 0;
		font-weight: 600;
		text-overflow: ellipsis;
	`}
`;

export const Price = styled.p`
	${({ theme }) => css`
		overflow: hidden;
		font-size: ${theme.fonts.sizes.normal};
		margin: 0;
		font-weight: 600;
		color: #457b9d;
		text-overflow: ellipsis;
	`}
`;

export const CardLocation = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 1px;
		padding: ${theme.spacings.xsmall};
		overflow: hidden;
		text-overflow: ellipsis;
		svg {
			width: ${theme.fonts.sizes.normal};
			height: ${theme.fonts.sizes.normal};
			color: green;
		}
	`}
`;

export const CardBar = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		align-items: center;
		justify-content: space-between;
		gap: ${theme.spacings.tiny};
	`}
`;

export const CardBarDetails = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		font-weight: 800;
	`}
`;

export const CardBarButtonContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		font-weight: 800;
		gap: ${theme.spacings.tiny};
		& ${Button} {
			padding: ${theme.spacings.xtiny};
			border-radius: 40px;
			& svg {
				margin: ${theme.spacings.xxtiny};
			}
		}
	`}
`;
