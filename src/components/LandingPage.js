import React from "react";

class LandingPage extends React.Component {
	render() {
		return (
			<div id="landing-page" className="container">
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
