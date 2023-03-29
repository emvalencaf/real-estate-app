// components
import Achor from "../Achor";

// styles
import * as Styled from "./styles";

// icons
import { Link } from "@styled-icons/material-outlined";
import { Trash } from "@styled-icons/bootstrap";
import Button from "../Button";
import { Dispatch, SetStateAction } from "react";

// types
export type FetchedImagesContainerProps = {
	urls: string[];
	handleRemove: Dispatch<SetStateAction<string[]>>;
};

const FetchedImagesContainer = ({
	urls,
	handleRemove,
}: FetchedImagesContainerProps) => {
	console.log(urls);
	return (
		<Styled.Wrapper>
			<p>Images attached to this ad</p>
			<Styled.List>
				{urls.length > 0 &&
					urls.map((url) => (
						<li key={url}>
							{url.substring(url.lastIndexOf("/") + 1)}
							<Styled.Container>
								<Achor link={url} icon={<Link />} />
								<Button
									type="button"
									icon={<Trash />}
									onClick={() =>
										handleRemove((state) =>
											state.filter(
												(imageUrl) => imageUrl !== url
											)
										)
									}
								/>
							</Styled.Container>
						</li>
					))}
			</Styled.List>
		</Styled.Wrapper>
	);
};

export default FetchedImagesContainer;
