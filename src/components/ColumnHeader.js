import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const ColumnHeader = styled.th`
	padding: 5px;
	background-color: #007e00;
	font-size: 1.1em;
	font-family: Lato, sans-serif;
	border-style: solid;
	border-color: black;
	border-width: 0.5px;
	white-space: nowrap;

	${breakpoint("xs")`
		font-size: 0.7em;
	`}

	${breakpoint("md")`
		font-size: 0.95em;
	`}

	${breakpoint("xl")`
		font-size: 1.1em;
	`}
`;

export default ColumnHeader;
