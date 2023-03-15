import * as Styled from "./styles";

// components
import Header from "../../components/Header";

// types
import { HomePageProps } from "../../shared-types/pages";

// mock
import mock from "./mock";

const HomeTemplate = ({ settings }: HomePageProps) => {
	console.log(mock.settings.logo);
	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
		</Styled.Wrapper>
	);
};

export default HomeTemplate;
