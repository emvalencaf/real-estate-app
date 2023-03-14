// components
import Achor from "../Achor";

// styles
import * as Styled from "./styles";

// types
export type MenuLinkProps = {
	children: string;
	icon?: React.ReactNode;
	link: string;
	newTab?: boolean;
};

const MenuLink = ({ children, icon, link, newTab = false }: MenuLinkProps) => {
	const target: "_blank" | "_self" = newTab ? "_blank" : "_self";
	return (
		<Styled.ListMenu>
			<Achor icon={!!icon && icon} link={link} target={target}>
				{children}
			</Achor>
		</Styled.ListMenu>
	);
};

export default MenuLink;
