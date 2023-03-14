// template
import FogotPasswordTemplate from "../../templates/FogotPassword";

// types
export type FogotPasswordPageProps = {
	title?: string;
};

export default function FogotPassword({ title = "" }: FogotPasswordPageProps) {
	return <FogotPasswordTemplate title={title} />;
}
