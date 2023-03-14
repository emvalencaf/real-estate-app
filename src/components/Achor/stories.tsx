import { Meta, Story } from "@storybook/react/types-6-0";

// component
import Achor, { AchorProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "Achor",
	component: Achor,
	args: mock,
} as Meta<AchorProps>;

export const Template: Story<AchorProps> = (args) => {
	return (
		<div>
			<Achor {...args} />
		</div>
	);
};
