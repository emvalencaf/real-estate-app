// types
import { HomePageProps } from "../../shared-types/pages";

export default {
	settings: {
		logo: {
			srcImg: "https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg",
			link: "/",
			newTab: false,
		},
		menu: {
			links: [
				{
					children: "Home",
					link: "/",
					newTab: false,
				},
				{
					children: "Offers",
					link: "/offers",
					newTab: false,
				},
			],
		},
	},
} as HomePageProps;
