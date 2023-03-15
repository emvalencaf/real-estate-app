import styled, { css, DefaultTheme } from "styled-components";
import { Achor } from "../Achor/styles";
// type
type ListMenuProps = {
	theme: DefaultTheme;
	isActive?: boolean;
};

export const ListMenu = styled.li<ListMenuProps>`
	${({ theme, isActive = false }) => css`
		list-style: none;
		color: ${isActive ? theme.colors.deepBlack : theme.colors.gray4};
		padding: ${theme.spacings.xsmall} 0px;
		border-bottom: 3px solid
			${isActive ? theme.colors.warning : "transparent"};

		& ${Achor} {
			color: inherit;
			font-size: ${theme.fonts.sizes.xsmall};
			font-weight: 600;
		}
		transition: all ${theme.transitions.slower} ease-in-out;
	`}
`;
