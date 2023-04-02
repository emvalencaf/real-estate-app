import styled, { css } from "styled-components";
import { Button } from "../Button/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		& ${Button} {
			background: darkblue;
			color: ${theme.colors.deepWhite};
		}
	`}
`;
