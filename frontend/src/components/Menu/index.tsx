// hooks
import { useSession } from "next-auth/react";
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
	const { data } = useSession();
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
							isActive={link.link === pathname}
						>
							{link.children}
						</MenuLink>
					))}
					{data?.user ? (
						<MenuLink
							link={"/profile"}
							newTab={false}
							isActive={"/profile" === pathname}
						>
							Profile
						</MenuLink>
					) : (
						<MenuLink
							link="/sign-in"
							newTab={false}
							isActive={"/sign-in" === pathname}
						>
							Sign in
						</MenuLink>
					)}
				</Styled.Ul>
			</Styled.Nav>
		</Styled.Wrapper>
	);
};

export default Menu;
