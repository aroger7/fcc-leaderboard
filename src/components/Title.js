import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Title = styled.h1`
	margin: 0px;
	padding: 15px 10px;
	text-align: right;
	font-family: Lato, sans-serif;
	color: #fff;
	white-space: nowrap;

	${breakpoint("xs")`
		font-size: 1em;
		padding-left: 5px;
		padding-right: 5px;
	`};

	${breakpoint("md")`
		font-size: 1.2em;
	`};

	${breakpoint("xl")`
		font-size: 1.3em;
	`};
`;

export default Title;
