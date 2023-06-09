// styles
import Heading from "../../components/Heading";
import RealEstateForm from "../../components/RealEstateForm";
import * as Styled from "./styles";

const CreateRealEstateTemplate = () => {
	return (
		<Styled.Wrapper>
			<Heading size="big">Create a real estate add</Heading>
			<RealEstateForm />
		</Styled.Wrapper>
	);
};

export default CreateRealEstateTemplate;
