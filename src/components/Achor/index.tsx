// styles
import Link from "next/link";
import * as Styled from "./styles";

// types
export type AchorProps = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	link: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
};

const Achor = ({ children, icon, link, target = "_blank" }: AchorProps) => {
	const nextLink = link.match(/^\//) ? true : false;

	if (nextLink)
		return (
			<Link href={link} legacyBehavior passHref>
				<Styled.Achor target={target}>
					{!!icon && icon}
					<span>{children}</span>
				</Styled.Achor>
			</Link>
		);

	return (
		<Styled.Achor href={link} target={target}>
			{!!icon && icon}
			<span>{children}</span>
		</Styled.Achor>
	);
};

export default Achor;
