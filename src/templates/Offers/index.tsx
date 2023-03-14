// styles
import Header from "../../components/Header";
import { LogoLinkProps } from "../../components/LogoLink";
import { MenuProps } from "../../components/Menu";
import * as Styled from "./styles";

// types
export type OffersTemplateProps = {
	settings: {
		logo: LogoLinkProps;
		menu: MenuProps;
	};
};

// mock
import mock from "../Home/mock";

const OffersTemplate = ({ settings }: OffersTemplateProps) => {
	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
		</Styled.Wrapper>
	);
};

export default OffersTemplate;
