import React, { Component } from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import Camper from "./Camper";
import ColumnHeader from "./ColumnHeader";
import SortableColumnHeader from "./SortableColumnHeader";
import LeaderboardMode from "../enums/LeaderboardMode";

const LeaderboardTable = styled.table`
	background-color: #fff;
	margin: auto;
	border-spacing: 0px;

	td {
		text-align: center;
		overflow: hidden;
		font-family: "Ubuntu Mono", monospace;
		border-style: solid;
		border-color: black;
		border-width: 0.5px;

		${breakpoint("xs")`
			font-size: 0.7em;
		`};

		${breakpoint('md')`
			font-size: 0.9em;
		`}

		${breakpoint('lg')`
			font-size: 1em;
		`}
	}
`;

class Leaderboard extends Component {
	constructor(props) {
		super(props);
		this.handleAllTimeClick = this.handleAllTimeClick.bind(this);
		this.handleRecentClick = this.handleRecentClick.bind(this);
	}

	handleAllTimeClick() {
		if (this.props.mode !== LeaderboardMode.allTime) {
			this.props.changeMode(LeaderboardMode.allTime);
		} else {
			this.props.toggleSortDirection();
		}
	}

	handleRecentClick() {
		if (this.props.mode !== LeaderboardMode.recent) {
			this.props.changeMode(LeaderboardMode.recent);
		} else {
			this.props.toggleSortDirection();
		}
	}

	render() {
		return (
			<LeaderboardTable>
				<thead>
					<tr>
						<ColumnHeader>#</ColumnHeader>
						<ColumnHeader>Camper</ColumnHeader>
						<SortableColumnHeader
							text="Last 30 Days"
							sortDirection={this.props.sortDirection}
							isActive={
								this.props.mode === LeaderboardMode.recent
							}
							onClick={this.handleRecentClick}
						/>
						<SortableColumnHeader
							text="All-Time"
							sortDirection={this.props.sortDirection}
							isActive={
								this.props.mode === LeaderboardMode.allTime
							}
							onClick={this.handleAllTimeClick}
						/>
					</tr>
				</thead>
				<tbody>
					{this.props.campers.concat().map((camper, index) => {
						return (
							<Camper
								key={camper.username}
								camper={camper}
								num={index + 1}
							/>
						);
					})}
				</tbody>
			</LeaderboardTable>
		);
	}

	sortByLast30Days() {}
}

export default Leaderboard;
