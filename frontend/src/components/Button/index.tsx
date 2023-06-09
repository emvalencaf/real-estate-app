// styles
import * as Styled from "./styles";

// types
import { ButtonHTMLAttributes } from "react";
export type ButtonProps = {
	icon?: React.ReactNode;
	children?: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	darkMode?: boolean;
	color?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "quaternary"
		| "quinary"
		| "senary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	children,
	disabled = false,
	color = "quaternary",
	onClick,
	icon,
	darkMode = undefined,
	type = "submit",
	value = "",
}: ButtonProps) => {
	const handleClick = () => {
		if (onClick) onClick();
	};

	return (
		<Styled.Button
			disabled={disabled}
			color={color}
			onClick={handleClick}
			type={type}
			value={value}
			darkMode={typeof darkMode !== "undefined" && darkMode}
		>
			{icon}
			{!!children && <Styled.ButtonLabel>{children}</Styled.ButtonLabel>}
		</Styled.Button>
	);
};

export default Button;
