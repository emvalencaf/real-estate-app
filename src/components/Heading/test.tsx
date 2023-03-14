import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Heading from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
	it("should render with default values", () => {
		renderTheme(<Heading>texto</Heading>);
		const heading = screen.getByRole("heading", { name: "texto" });

		expect(heading).toHaveStyle({
			color: theme.colors.primary,
			"font-size": theme.fonts.sizes.xhuge,
			"text-transform": "none",
		});
	});

	it("should render with white color", () => {
		renderTheme(<Heading>texto</Heading>);
		const heading = screen.getByRole("heading", { name: "texto" });

		expect(heading).toHaveStyle({
			color: theme.colors.white,
		});
	});

	it("should render correct heading sizes", () => {
		const { rerender } = renderTheme(
			<Heading size="small" as={"h6"} uppercase={false}>
				texto
			</Heading>
		);
		const heading = screen.getByRole("heading", { name: "texto" });

		expect(heading).toHaveStyle({
			"font-size": theme.fonts.sizes.medium,
		});

		rerender(
			<ThemeProvider theme={theme}>
				<Heading size="big" as={"h6"} uppercase={false}>
					texto
				</Heading>
			</ThemeProvider>
		);

		expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
			"font-size": theme.fonts.sizes.xlarge,
		});

		rerender(
			<ThemeProvider theme={theme}>
				<Heading size="medium" as={"h6"} uppercase={false}>
					texto
				</Heading>
			</ThemeProvider>
		);

		expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
			"font-size": theme.fonts.sizes.large,
		});

		rerender(
			<ThemeProvider theme={theme}>
				<Heading size="huge" as={"h6"} uppercase={false}>
					texto
				</Heading>
			</ThemeProvider>
		);

		expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
			"font-size": theme.fonts.sizes.xhuge,
		});
	});

	it("should render correct font-size when using mobile", () => {
		renderTheme(
			<Heading size="huge" as={"h6"} uppercase={false}>
				texto
			</Heading>
		);
		screen.getByRole("heading", { name: "texto" });

		expect(screen.getByRole("heading", { name: "texto" })).toHaveStyleRule(
			"font-size",
			theme.fonts.sizes.xlarge,
			{
				media: theme.media.lteOrEqMedium,
			}
		);
	});

	it("should render with uppercase letters", () => {
		renderTheme(
			<Heading uppercase={true} as={"h6"} size={"big"}>
				texto
			</Heading>
		);
		const heading = screen.getByRole("heading", { name: "texto" });

		expect(heading).toHaveStyle({
			"text-transform": "uppercase",
		});
	});

	it("should render correct heading element", () => {
		const { container } = renderTheme(
			<Heading as="h6" size={"small"} uppercase={false}>
				texto
			</Heading>
		);
		screen.getByRole("heading", { name: "texto" });
		const h6 = container.querySelector("h6");

		expect(h6.tagName.toLowerCase()).toBe("h6");
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<Heading>texto</Heading>);

		expect(container).toMatchSnapshot();
	});
});
