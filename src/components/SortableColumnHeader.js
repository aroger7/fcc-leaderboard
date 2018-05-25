import React from "react";
import styled from "styled-components";
import ColumnHeader from "./ColumnHeader";
import SortDirection from "../enums/SortDirection";

const HeaderText = styled.p`
	margin: 0px;
	text-decoration: ${props => (props.isActive ? "underline" : "initial")};
	&::after {
		content: ${props =>
			props.isActive
				? props.sortDirection === SortDirection.descending
					? "' \u25BC'"
					: "' \u25B2'"
				: ""};
	}
`;

const SortableColumnHeader = props => {
	return (
		<ColumnHeader onClick={props.onClick}>
			<HeaderText
				sortDirection={props.sortDirection}
				isActive={props.isActive}
			>
				{props.text}
			</HeaderText>
		</ColumnHeader>
	);
};

export default SortableColumnHeader;
