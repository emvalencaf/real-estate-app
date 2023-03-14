// styles
import Link from "next/link";
import * as Styled from "./styles";

// types
export type AchorProps = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	isImage?: boolean;
	link: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
};

const Achor = ({
	children,
	icon,
	link,
	target = "_blank",
	isImage = false,
}: AchorProps) => {
	const nextLink = link.match(/^\//) ? true : false;
	console.log("in achor: ", children);
	if (nextLink)
		return (
			<Link href={link} legacyBehavior passHref>
				<Styled.Achor target={target}>
					{!!icon && icon}
					{isImage ? (
						<picture>{children}</picture>
					) : (
						<span>{children}</span>
					)}
				</Styled.Achor>
			</Link>
		);

	return (
		<Styled.Achor href={link} target={target}>
			{!!icon && icon}
			{isImage ? <picture>{children}</picture> : <span>{children}</span>}
		</Styled.Achor>
	);
};

export default Achor;
