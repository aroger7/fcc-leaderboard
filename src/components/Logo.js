import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Logo = styled.img`
	padding: 15px 10px;
	vertical-align: middle;

	${breakpoint("xs")`
		width: 125px;
		padding-left: 5px;
		padding-right: 5px;
	`};

	${breakpoint("lg")`
		width: 250px;
	`};
`;

export default Logo;
