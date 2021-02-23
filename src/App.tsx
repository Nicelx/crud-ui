import React, { Component } from "react";
// import Home from "./container/home/Home";

import "./App.css";
import { Form } from './container/form/Form';



class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Home /> */}
				<Form/>
			</div>
		);
	}
}

export default App;
