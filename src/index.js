import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import NavTabs from "./components/NavTabs";
import LandingPage from "./components/LandingPage";
import MemeEdit from "./components/MemeEdit";
import * as serviceWorker from "./serviceWorker";

const RoutedApp = (
	<Router>
		<Route exact path="/" component={LandingPage} />
		<Route exact path="/new" component={App} />
		<Route exact path="/memes" component={NavTabs} />
		<Route path="/memes/edit" component={MemeEdit} />
	</Router>
);

ReactDOM.render(RoutedApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
