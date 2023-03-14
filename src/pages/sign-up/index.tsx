// template
import SignUpTemplate from "../../templates/SignUp";

// types
export type SignUpPageProps = {
	title?: string;
};

export default function SignUp({ title = "" }: SignUpPageProps) {
	return <SignUpTemplate title={title} />;
}
