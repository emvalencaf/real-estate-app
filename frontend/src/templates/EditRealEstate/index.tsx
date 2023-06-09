// controller
import RealEstateForm from "../../components/RealEstateForm";
import { RealEstateModel } from "../../shared-types/realestate";

// styles
import * as Styled from "./styles";

// type
export type EditRealEstateTemplateProps = {
	realEstate?: RealEstateModel;
	fileList?: FileList;
};

const EditRealEstateTemplate = ({
	realEstate,
}: EditRealEstateTemplateProps) => {
	console.log(realEstate?.images);
	return (
		<Styled.Wrapper>
			<RealEstateForm
				realEstateProps={realEstate ? realEstate : null}
				action="update"
			/>
		</Styled.Wrapper>
	);
};

export default EditRealEstateTemplate;
