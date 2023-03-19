// hooks
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
	redirect?: boolean;
	redirectUrl?: string;
	disabled?: boolean;
};

// icon
import { Timer } from "@styled-icons/material-outlined";
import { useRouter } from "next/router";

// utils
import { toast } from "react-toastify";

const Form = ({
	children,
	btnIcon,
	btnText = "enviar",
	reference,
	onSubmit,
	asyncOnSubmit = false,
	redirect = false,
	redirectUrl = "",
	disabled = false,
}: FormProps) => {
	// ref
	const formRef = useRef<HTMLFormElement | null>(reference);

	// states
	const [loading, setLoading] = useState(false);

	// router
	const router = useRouter();

	// handle events
	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();

		if (asyncOnSubmit) {
			const asyncFn = async () => {
				if (onSubmit) {
					setLoading(true);
					try {
						await onSubmit(formRef);
						if (redirect) router.push(redirectUrl);
					} catch (err) {
						console.log(err);
						toast.error(err.message);
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
			<Button
				disabled={loading || disabled}
				icon={!!btnIcon && loading ? <Timer /> : btnIcon}
			>
				{loading ? "carregando..." : btnText}
			</Button>
		</Styled.Form>
	);
};

export default Form;
