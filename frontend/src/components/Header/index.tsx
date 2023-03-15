// components
import LogoLink, { LogoLinkProps } from "../LogoLink";
import Menu, { MenuProps } from "../Menu";

// styles
import * as Styled from "./styles";

// types
export type HeaderProps = {
	logo: LogoLinkProps;
	menu: MenuProps;
};

const Header = ({ logo, menu }: HeaderProps) => {
	return (
		<Styled.Header>
			{!!logo && <LogoLink {...logo} />}
			{!!menu && <Menu {...menu} />}
		</Styled.Header>
	);
};

export default Header;
