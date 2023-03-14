import styled, { css } from "styled-components";

export const Wrapper = styled.main`
	${({ theme }) => css`
		height: 100vh;
		background-color: rgba(240, 253, 244);
	`}
`;

export const Section = styled.section`
	${({ theme }) => css`
		@media ${theme.media.gteOrEqLarge} {
			& picture > img,
			& picture {
				width: 50%;
			}
			& picture {
				border-right: ${theme.spacings.tiny} solid;
			}
		}
		@media ${theme.media.lteOrEqMedium} {
			& picture > img,
			& picture {
				width: 67%;
			}
			& picture {
				border-right: ${theme.spacings.tiny} solid;
			}
		}
		@media ${theme.media.lteOrEqSmall} {
			& picture > img {
				width: 100%;
			}
		}

		& picture > img {
			border-radius: ${theme.spacings.small};
		}
	`}
`;
