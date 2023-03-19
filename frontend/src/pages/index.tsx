// templates
import HomeTemplate from "../templates/Home";

// type
import { HomePageProps } from "../shared-types/pages";
import { GetServerSideProps } from "next";
import { privateServerSideProps } from "../utils/private-serverside-props";

export default function Index({ settings }: HomePageProps) {
	return <HomeTemplate settings={settings} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
