// styles
import { InputHTMLAttributes, useRef } from "react";
import * as Styled from "./styles";

// types
export type NumberInputProps = {
	label: string;
	name: string;
	type?: string;
	onInputChange?: (value: number) => void;
	onIconClick?: () => void;
	disabled?: boolean;
	errorMessage?: string;
	value?: number;
	icon?: React.ReactNode;
	reference?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;

const NumberInput = ({
	label,
	name,
	type = "number",
	icon,
	onInputChange,
	onIconClick,
	disabled,
	errorMessage = "",
	value = 0,
	reference = null,
	min = 0,
	max = 100,
}: NumberInputProps) => {
	const inputRef = useRef(reference);

	// synthetic event handler
	const handleChange = () => {
		const value = inputRef.current.value;

		if (onInputChange) {
			onInputChange(Number(value));
		}
	};

	return (
		<Styled.Wrapper>
			<Styled.InputWrapper>
				<Styled.Input
					name={name}
					onChange={handleChange}
					type={type}
					disabled={disabled}
					ref={inputRef}
					min={min}
					max={max}
					value={value}
				/>
				<Styled.Label>{label}</Styled.Label>
			</Styled.InputWrapper>
			{!!errorMessage && (
				<Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
			)}
		</Styled.Wrapper>
	);
};

export default NumberInput;
