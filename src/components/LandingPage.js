import React from "react";
import Header from "./Header";

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<img
					src={process.env.PUBLIC_URL + "AcmeMeme.png"}
					alt=""
					width="75%"
					height="80%"
				/>
			</div>
		);
	}
}

export default LandingPage;
