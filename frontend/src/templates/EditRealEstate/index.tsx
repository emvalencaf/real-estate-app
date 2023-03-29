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
	return <RealEstateForm realEstate={realEstate ? realEstate : null} />;
};

export default EditRealEstateTemplate;
