// styles
import * as Styled from "./styles";

// types
import { InputHTMLAttributes, useRef } from "react";
export type FileImageInputProps = {
	label: string;
	name: string;
	type?: string;
	onInputChange?: () => void;
	onIconClick?: () => void;
	disabled?: boolean;
	errorMessage?: string;
	value?: File;
	icon?: React.ReactNode;
	reference?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;

const FileImageInput = ({
	label,
	name,
	type = "file",
	icon,
	onInputChange,
	onIconClick,
	disabled,
	errorMessage = "",
	value = null,
	reference = null,
	max = 1,
	multiple = false,
	accept = ".jpg,.png,.jpg",
}: FileImageInputProps) => {
	const inputRef = useRef(reference);

	// synthetic event handler
	const handleChange = () => {
		const value = inputRef.current.value;

		if (onInputChange) {
			onInputChange();
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
					max={max}
					value={value}
					accept={accept}
					multiple={multiple}
				/>
				<Styled.Label>{label}</Styled.Label>
			</Styled.InputWrapper>
			{!!errorMessage && (
				<Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
			)}
		</Styled.Wrapper>
	);
};

export default FileImageInput;
