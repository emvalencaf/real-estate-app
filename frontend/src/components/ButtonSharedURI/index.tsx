// hooks
import { useState } from "react";

// styles
import Button from "../Button";
import * as Styled from "./styles";

// icon
import { Share } from "@styled-icons/material-outlined";
const ButtonSharedURI = () => {
	// states
	const [shareLinkCopied, setShareLinkCopied] = useState<boolean>(false);

	// handleClick
	const handleClick = () => {
		// copy the href from the current window
		navigator.clipboard.writeText(location.href);

		setShareLinkCopied(true);
		setTimeout(() => {
			setShareLinkCopied(false);
		}, 2000);
	};

	return (
		<>
			<Styled.Wrapper>
				<Button icon={<Share />} onClick={() => handleClick()} />
			</Styled.Wrapper>
			<Styled.Feedback>
				{shareLinkCopied && <p>Link was succefully copied</p>}
			</Styled.Feedback>
		</>
	);
};

export default ButtonSharedURI;
