import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${() => css``}
`;

export const List = styled.ul`
	${({ theme }) => css`
		display: grid;
		@media ${theme.media.gteOrEqLarge} {
			grid-template-columns: 1fr 1fr 1fr;
		}
		@media ${theme.media.lteOrEqLarge} {
			grid-template-columns: 1fr 1fr;
		}
		@media ${theme.media.lteOrEqMedium} {
			grid-template-columns: 1fr;
		}

		gap: ${theme.spacings.medium};
	`}
`;
