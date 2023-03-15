import * as Styled from "./styles";

export type HeadingProps = {
	children: React.ReactNode;
	color?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "quaternary"
		| "quinary"
		| "senary";
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: "small" | "medium" | "big" | "huge";
	uppercase?: boolean;
	weight?: "bold" | "bolder" | "normal" | "lighter";
};

const Heading = ({
	children,
	color = "secondary",
	as = "h1",
	size = "huge",
	weight = "normal",
	uppercase = false,
}: HeadingProps) => {
	return (
		<Styled.Title
			color={color}
			as={as}
			size={size}
			uppercase={uppercase}
			weight={weight}
		>
			{children}
		</Styled.Title>
	);
};

export default Heading;
