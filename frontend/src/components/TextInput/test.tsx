import { renderTheme } from "../../styles/render-theme";

// react component to be test
import TextInput from ".";

// mock
import mock from "./mock";

describe("<TextInput />", () => {
	it("should match a snapshot", () => {
		const { container } = renderTheme(<TextInput {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
