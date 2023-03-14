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
	disabled?: boolean;
};

const Achor = ({
	children,
	icon,
	link,
	target = "_blank",
	isImage = false,
	disabled = false,
}: AchorProps) => {
	const nextLink = link.match(/^\//) ? true : false;
	if (nextLink)
		return (
			<Link href={link} legacyBehavior passHref>
				<Styled.Achor target={target} disabled={disabled}>
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
		<Styled.Achor href={link} target={target} disabled={disabled}>
			{!!icon && icon}
			{isImage ? <picture>{children}</picture> : <span>{children}</span>}
		</Styled.Achor>
	);
};

export default Achor;
