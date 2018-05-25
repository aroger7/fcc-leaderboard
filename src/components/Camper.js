import React from "react";
import CamperInfo from "./CamperInfo";

const Camper = ({ camper, num }) => {
	return (
		<tr>
			<td>{num}</td>
			<td>
				<CamperInfo camper={camper} />
			</td>
			<td>{camper.recent}</td>
			<td>{camper.alltime}</td>
		</tr>
	);
};

export default Camper;
