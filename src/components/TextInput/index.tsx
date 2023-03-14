// hooks
import { InputHTMLAttributes, useRef, useState } from "react";
import CharacterCounter from "../CharacterCounter";

// styles
import * as Styled from "./styles";

// types
export type TextInputProps = {
	label: string;
	name: string;
	type?: string;
	onInputChange?: (value: string) => void;
	disabled?: boolean;
	errorMessage?: string;
	value?: string;
	icon?: React.ReactNode;
	as?: "input" | "textarea";
	reference?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
	label,
	name,
	type = "text",
	onInputChange,
	disabled = false,
	errorMessage = "",
	value = "",
	icon,
	as = "input",
	maxLength = 524288,
	reference = null,
	required = false,
}: TextInputProps) => {
	// states
	const [counter, setCounter] = useState(value.length);

	const inputRef = useRef(reference);

	// synthetic event handler
	const handleChange = () => {
		const value = inputRef.current.value;

		if (onInputChange) {
			onInputChange(value);
			setCounter(value.length);
		}
	};

	return (
		<Styled.Wrapper>
			<Styled.InputWrapper errorMessage={errorMessage}>
				<Styled.Input
					type={type}
					name={name}
					id={name}
					disabled={disabled}
					ref={inputRef}
					onChange={handleChange}
					placeholder={label}
					errorMessage={errorMessage}
					as={as}
					defaultValue={value}
					required={required}
					maxLength={maxLength ? maxLength : 524288}
				/>
				<Styled.Label htmlFor={name} element={as}>
					{label}
				</Styled.Label>
				{!!icon && as !== "textarea" && icon}
				{maxLength !== 524288 && (
					<CharacterCounter
						currentLeng={counter}
						maxLeng={maxLength}
					/>
				)}
			</Styled.InputWrapper>

			{!!errorMessage && (
				<Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
			)}
		</Styled.Wrapper>
	);
};

export default TextInput;
