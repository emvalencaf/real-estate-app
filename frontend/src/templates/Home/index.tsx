import * as Styled from "./styles";

// components
import Header from "../../components/Header";

// types
import { HomePageProps } from "../../shared-types/pages";

// mock
import mock from "./mock";
import { useSession } from "next-auth/react";

const HomeTemplate = ({ settings }: HomePageProps) => {
	const { data } = useSession();
	console.log(data);
	return (
		<Styled.Wrapper>
			<Header logo={mock.settings.logo} menu={mock.settings.menu} />
		</Styled.Wrapper>
	);
};

export default HomeTemplate;
