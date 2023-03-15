// styles
import * as Styled from "./styles";

// types
export type CharacterCounterProps = {
	currentLeng: string | number;
	maxLeng: string | number;
};

const CharacterCounter = ({ currentLeng, maxLeng }: CharacterCounterProps) => {
	return (
		<Styled.Wrapper>
			<span>
				{Number(currentLeng)}/ {Number(maxLeng)}
			</span>
		</Styled.Wrapper>
	);
};

export default CharacterCounter;
