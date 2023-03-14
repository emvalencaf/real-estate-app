// template
import SignInTemplate from "../../templates/SignIn";

// types
export type SignInPageProps = {
	title?: string;
};

export default function SignIn({ title = "" }: SignInPageProps) {
	return <SignInTemplate title={title} />;
}
