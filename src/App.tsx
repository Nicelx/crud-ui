import React, { Component } from "react";
import { Home } from "./container/home/Home";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Form } from "./container/form/Form";
import { Table } from "./container/table/Table";


class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/table" component={Table} />
				</Switch>
				{/* <Form/> */}
			</div>
		);
	}
}

export default App;
