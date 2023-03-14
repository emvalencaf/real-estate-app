// comonents
import Header from "../components/Header";

// context
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

// types
import { GlobalStyles } from "../styles/global-styles";

// types
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<GlobalStyles />
		</ThemeProvider>
	);
}
