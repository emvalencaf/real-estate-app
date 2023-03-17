// component
import { ToastContainer } from "react-toastify";

// context
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

// types
import { GlobalStyles } from "../styles/global-styles";

// styles
import "react-toastify/dist/ReactToastify.css";

// types
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<GlobalStyles />
				<ToastContainer
					position="bottom-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</ThemeProvider>
		</SessionProvider>
	);
}
