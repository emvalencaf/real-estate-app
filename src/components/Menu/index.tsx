// components
import MenuLink, { MenuLinkProps } from "../MenuLink";

// styles
import * as Styled from "./styles";

// types
export type MenuProps = {
	links?: MenuLinkProps[];
};

const Menu = ({ links = [] }: MenuProps) => {
	return (
		<Styled.Wrapper>
			<Styled.Nav>
				<Styled.Ul>
					{links.map((link, index) => (
						<MenuLink
							key={`${index} - ${link.children}`}
							link={link.link}
							newTab={false}
						>
							{link.children}
						</MenuLink>
					))}
				</Styled.Ul>
			</Styled.Nav>
		</Styled.Wrapper>
	);
};

export default Menu;
