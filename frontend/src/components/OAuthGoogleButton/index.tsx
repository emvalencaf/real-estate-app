// components
import Button from "../Button";

// styles
import * as Styled from "./styles";

// icons
import { Google } from "@styled-icons/bootstrap";

const OAuthGoogleButton = () => {
	// popupCenter
	const popupCenter = (url: string, title: string) => {
		const dualScreenLeft = window.screenLeft ?? window.screenX;
		const dualScreenTop = window.screenTop ?? window.screenY;

		const width =
			window.innerWidth ??
			document.documentElement.clientWidth ??
			screen.width;

		const height =
			window.innerHeight ??
			document.documentElement.clientHeight ??
			screen.height;

		const systemZoom = width / window.screen.availWidth;

		const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
		const top = (height - 550) / 2 / systemZoom + dualScreenTop;

		const newWindow = window.open(
			url,
			title,
			`width=${500 / systemZoom},height=${
				550 / systemZoom
			},top=${top},left=${left}`
		);

		newWindow?.focus();
	};

	return (
		<Styled.Wrapper>
			<Button
				icon={<Google />}
				onClick={() => popupCenter("/google-sign-in", "Google Auth")}
			>
				Continue with google
			</Button>
		</Styled.Wrapper>
	);
};

export default OAuthGoogleButton;
