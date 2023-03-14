// hooks
import { Close } from "@styled-icons/material-outlined";
import { MutableRefObject, SyntheticEvent, useRef, useState } from "react";

// components
import Button from "../Button";

// styles
import * as Styled from "./styles";

// types
export type FormProps = {
	children: React.ReactNode;
	btnIcon?: React.ReactNode;
	btnText?: string;
	onSubmit?: <T>(
		form?: MutableRefObject<HTMLFormElement>
	) => Promise<T> | void;
	asyncOnSubmit?: boolean;
	reference?: HTMLFormElement;
};

// icon
import { Timer } from "@styled-icons/material-outlined";

const Form = ({
	children,
	btnIcon,
	btnText = "enviar",
	reference,
	onSubmit,
	asyncOnSubmit = false,
}: FormProps) => {
	// ref
	const formRef = useRef<HTMLFormElement | null>(reference);

	// states
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [visible, setVisible] = useState(!!errorMessage);

	// handle events
	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();

		if (asyncOnSubmit) {
			const asyncFn = async () => {
				if (onSubmit) {
					setLoading(true);
					try {
						await onSubmit(formRef);
					} catch (err) {
						setErrorMessage(err.message);
						setVisible(true);
					}
					setLoading(false);
					return;
				}
			};

			asyncFn();
		} else {
			if (onSubmit) onSubmit(formRef);
		}
	};

	return (
		<Styled.Form
			onSubmit={(event: SyntheticEvent) => handleSubmit(event)}
			ref={formRef}
		>
			{children}
			<Styled.Alert visible={visible} isSuccess={!!errorMessage}>
				{<span>{!!errorMessage && errorMessage}</span>}
				<Styled.CloseButton onClick={() => setVisible(false)}>
					{<Close />}
				</Styled.CloseButton>
			</Styled.Alert>
			<Button
				disabled={loading}
				icon={!!btnIcon && loading ? <Timer /> : btnIcon}
			>
				{loading ? "carregando..." : btnText}
			</Button>
		</Styled.Form>
	);
};

export default Form;
