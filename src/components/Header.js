import React, { Component } from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import FlexContainer from "./FlexContainer";
import FlexParent from "./FlexParent";
import Logo from "./Logo";
import Title from "./Title";

const HeaderWrapper = styled.header`
	width: 100%:
`;

const HeaderParent = FlexParent.extend`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #006400;
	min-width: 320px;

	${breakpoint("xs")`
		height: 55px;
	`};

	${breakpoint("xl")`
		height: 65px;
	`};
`;

const HeaderSpacer = styled.div`
	height: ${props => props.height}px;
`;

class Header extends Component {
	constructor(props) {
		super(props);
		this.headerParentRef = React.createRef();
		this.handleResize = this.handleResize.bind(this);
		this.state = {
			spacerHeight: 0
		};
	}

	componentDidMount() {
		this.handleResize();
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize() {
		let headerHeight = this.headerParentRef.current.offsetHeight;
		if (this.state.spacerHeight !== headerHeight) {
			this.setState({
				spacerHeight: this.headerParentRef.current.offsetHeight
			});
		}
	}

	render() {
		return (
			<HeaderWrapper>
				<HeaderParent
					justify="center"
					alignItems="center"
					innerRef={this.headerParentRef}
				>
					<FlexContainer grow="1">
						<FlexParent alignItems="center">
							<a
								href="https://www.freecodecamp.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Logo src="images/freeCodeCamp.png" />
							</a>
						</FlexParent>
					</FlexContainer>
					<FlexContainer grow="1">
						<Title>Camper Leaderboard</Title>
					</FlexContainer>
				</HeaderParent>
				<HeaderSpacer height={this.state.spacerHeight} />
			</HeaderWrapper>
		);
	}
}

export default Header;
