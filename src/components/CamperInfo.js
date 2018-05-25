import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
	width: 25px;
	border-radius: 50%;
`;

const Username = styled.p`
	font-family: "Ubuntu Mono", monospace;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	> * {
		margin: 5px;
	}
`;

const CamperInfo = ({ camper }) => {
	return (
		<Wrapper>
			<Avatar src={camper.img} alt={camper.username} />
			<Username>
				<a
					href={"https://www.freecodecamp.org/" + camper.username}
					target="_blank"
					rel="noopener noreferrer"
				>
					{camper.username}
				</a>
			</Username>
		</Wrapper>
	);
};

export default CamperInfo;
