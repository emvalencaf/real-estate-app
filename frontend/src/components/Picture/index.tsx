// styles
import * as Styled from "./styles";

// types
export type PictureProps = {
	srcImg?: string;
	altText?: string;
};

const Picture = ({ srcImg = "", altText = "" }: PictureProps) => {
	return (
		<Styled.Picture>
			<img src={srcImg} alt={altText} loading="lazy" />
		</Styled.Picture>
	);
};

export default Picture;
