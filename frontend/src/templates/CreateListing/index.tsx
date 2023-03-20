// styles
import Heading from "../../components/Heading";
import ListingForm from "../../components/ListingForm";
import * as Styled from "./styles";

const CreateListingTemplate = () => {
	return (
		<Styled.Wrapper>
			<Heading size="big">Create a Listing</Heading>
			<ListingForm />
		</Styled.Wrapper>
	);
};

export default CreateListingTemplate;
