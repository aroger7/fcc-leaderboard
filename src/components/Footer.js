import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const FooterWrapper = styled.footer`
	background-color: transparent;
`;

const Copyright = styled.p`
	background-color: transparent;
	text-align: center;
	font-family: Lato, sans-serif;

	${breakpoint("xs")`
		font-size: 0.5em;
	`};

	${breakpoint("md")`
		font-size: 0.7em;
	`};
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<Copyright>
				Created by <a href="https://github.com/aroger7">Adam Rogers</a>
			</Copyright>
		</FooterWrapper>
	);
};

export default Footer;
