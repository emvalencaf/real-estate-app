// templates
import HomeTemplate from "../templates/Home";

// type
import { HomePageProps } from "../shared-types/pages";

export default function Index({ settings }: HomePageProps) {
	return <HomeTemplate settings={settings} />;
}
