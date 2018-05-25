import React, { Component } from "react";
import styled from "styled-components";
import Leaderboard from "./Leaderboard";
import LeaderboardMode from "../enums/LeaderboardMode";
import SortDirection from "../enums/SortDirection";

const BodyWrapper = styled.div`
	padding: 10px;
`;

export default class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			campers: [],
			mode: LeaderboardMode.recent,
			sortDirection: SortDirection.descending
		};
	}

	changeMode(mode) {
		if (mode !== this.state.mode) {
			this.setState({ mode: mode, sortDirection: "descending" }, () =>
				this.getCampers()
			);
		}
	}

	changeSortDirection(direction) {
		if (direction !== this.state.sortDirection) {
			this.setState({ sortDirection: direction }, () =>
				this.sortCampers()
			);
		}
	}

	componentWillMount() {
		this.getCampers();
	}

	getCampers(callback) {
		let endpoint =
			this.state.mode === LeaderboardMode.recent ? "recent" : "alltime";
		let uri = this.props.usersApiRoot + "top/" + endpoint;
		console.log('getting campers from "' + uri + '"');
		fetch(uri)
			.then(results => {
				return results.json();
			})
			.then(data => {
				this.setState({ campers: data }, () => this.sortCampers());
				console.log("set camper list");
				if (callback) {
					callback();
				}
			});
	}

	sortCampers() {
		this.setState({
			campers: this.state.campers.sort((a, b) => {
				let aNum, bNum;
				if (this.state.mode === LeaderboardMode.recent) {
					aNum = a.recent;
					bNum = b.recent;
				} else {
					aNum = a.alltime;
					bNum = b.alltime;
				}

				return this.state.sortDirection === SortDirection.descending
					? bNum - aNum
					: aNum - bNum;
			})
		});
	}

	toggleSortDirection() {
		let sortDirection =
			this.state.sortDirection === SortDirection.descending
				? SortDirection.ascending
				: SortDirection.descending;
		this.changeSortDirection(sortDirection);
	}

	render() {
		return (
			<BodyWrapper>
				<Leaderboard
					campers={this.state.campers.concat()}
					changeMode={this.changeMode.bind(this)}
					changeSortDirection={this.changeSortDirection.bind(this)}
					mode={this.state.mode}
					sortDirection={this.state.sortDirection}
					toggleSortDirection={this.toggleSortDirection.bind(this)}
				/>
			</BodyWrapper>
		);
	}
}
