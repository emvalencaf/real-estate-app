// template
import OffersTemplate from "../../templates/Offers";

// types
export type OffersPageProps = {
	title?: string;
};

export default function Offers({ title = "" }: OffersPageProps) {
	return <OffersTemplate title={title} />;
}
