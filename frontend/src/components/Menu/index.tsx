// hooks
import { useRouter } from "next/router";

// components
import MenuLink, { MenuLinkProps } from "../MenuLink";

// styles
import * as Styled from "./styles";

// types
export type MenuProps = {
	links?: MenuLinkProps[];
};

const Menu = ({ links = [] }: MenuProps) => {
	// get the location href
	const router = useRouter();
	const { pathname } = router;

	return (
		<Styled.Wrapper>
			<Styled.Nav>
				<Styled.Ul>
					{links.map((link, index) => (
						<MenuLink
							key={`${index} - ${link.children}`}
							link={link.link}
							newTab={false}
							isActive={link.link === pathname ? true : false}
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
