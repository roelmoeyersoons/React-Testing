import React, { Component, Fragment } from "react";
import { MyContext } from "../context/MyProvider";
import TabList from "./TabList";

class Overview extends Component {
	constructor(props, context) {
		super(props);
		this.state = { tabs: [], favorites: [] };
		context.getTabs().then(res => {
			this.setState({ tabs: res });
			//console.log(res);
		});
	}

	render() {
		let laden = <h1>Laden...</h1>;
		if (this.state.tabs.length) {
			laden = <TabList tabs={this.state.tabs} />;
		}
		return (
			<Fragment>
				<h2>All tabs</h2>
				<br />
				{laden}
			</Fragment>
		);
	}
}

Overview.contextType = MyContext;
export default Overview;
