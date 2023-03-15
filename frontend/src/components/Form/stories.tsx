import { Meta, Story } from "@storybook/react/types-6-0";
import Form, { FormProps } from ".";

export default {
	title: "Form",
	component: Form,
} as Meta<FormProps>;

export const Template: Story<FormProps> = (args) => {
	return (
		<div>
			<Form {...args} />
		</div>
	);
};
