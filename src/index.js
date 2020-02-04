import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import NavTabs from "./components/NavTabs";
import Gallery from "./components/Gallery";
import LandingPage from "./components/LandingPage";
import MemeGenerator from "./components/MemeGenerator";
import MemeEdit from "./components/MemeEdit";
import * as serviceWorker from "./serviceWorker";

const RoutedApp = (
	<Router>
    <NavTabs />
		<Route exact path="/" component={LandingPage} />
		<Route exact path="/new" component={MemeGenerator} />
		<Route exact path="/memes" component={Gallery} />
		<Route path="/memes/edit" component={MemeEdit} />
	</Router>
);

ReactDOM.render(RoutedApp, document.getElementById("root"));

serviceWorker.unregister();
