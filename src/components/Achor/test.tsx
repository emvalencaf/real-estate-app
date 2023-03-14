import { renderTheme } from "../../styles/render-theme";

// component
import Achor from ".";

// react component to be test
import mock from "./mock";
describe("<Achor />", () => {
	it("should render component it props default values", () => {
		const { container } = renderTheme(
			<Achor link={mock.link}>{mock.children}</Achor>
		);

		expect(container).toMatchSnapshot();
	});
});
