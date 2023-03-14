import * as Styled from "./styles";

// components
import Header from "../../components/Header";

// types
import { LogoLinkProps } from "../../components/LogoLink";
import { MenuProps } from "../../components/Menu";
export type HomeTemplateProps = {
	settings: {
		logo: LogoLinkProps;
		menu: MenuProps;
	};
};

// mock
import mock from "./mock";

const HomeTemplate = ({ settings }: HomeTemplateProps) => {
	console.log(mock.settings.logo);
	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
		</Styled.Wrapper>
	);
};

export default HomeTemplate;
