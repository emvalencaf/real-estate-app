// styles
import Achor from "../Achor";
import * as Styled from "./styles";

// types
export type LogoLinkProps = {
	children?: React.ReactNode;
	link: string;
	srcImg?: string;
	newTab?: boolean;
};

const LogoLink = ({
	children = "",
	link,
	srcImg,
	newTab = false,
}: LogoLinkProps) => {
	const target: "_blank" | "_self" = newTab ? "_blank" : "_self";
	return (
		<Styled.Wrapper>
			<Achor link={link} isImage={srcImg ? true : false} target={target}>
				{srcImg ? <img src={srcImg} alt="website's logo" /> : children}
			</Achor>
		</Styled.Wrapper>
	);
};

export default LogoLink;
