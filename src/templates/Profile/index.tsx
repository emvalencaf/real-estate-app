// styles
import * as Styled from "./styles";

// types
export type ProfileTemplateProps = {
	title?: string;
};

const ProfileTemplate = ({ title = "" }: ProfileTemplateProps) => {
	return (
		<Styled.Wrapper>
			<h1> {title} </h1>
		</Styled.Wrapper>
	);
};

export default ProfileTemplate;
