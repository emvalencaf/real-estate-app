// template
import ProfileTemplate from "../../templates/Profile";
// types
export type ProfilePageProps = {
	title?: string;
};

export default function Profile({ title = "" }: ProfilePageProps) {
	return <ProfileTemplate title={title} />;
}
