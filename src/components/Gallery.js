import React from "react";
import axios from "axios";

class Gallery extends React.Component {
	state = {
		mySavedMemes: [],
		error: ""
	};

	componentDidMount() {
		this.getMyMemes();
	}

	getMyMemes = () => {
		axios.get("http://localhost:3001/api/memes").then(response => {
			const myMemes = response.data;
			this.setState({
				mySavedMemes: myMemes
			});
			console.log(this.state.mySavedMemes);
		});
	};

	render() {
		if (this.state.error) {
			return <h1>{this.state.error}</h1>;
		}
		return (
			<div className="myMemes">
				<h1>My Gallery ({this.state.mySavedMemes.length})</h1>
				<div className="grid-container">
					{this.state.mySavedMemes.map((meme, index) => {
						return (
							<div className="meme" key={index}>
								<img src={meme.memeUrl} alt="" />
								<h2 className="top">{meme.topText}</h2>
								<h2 className="bottom">{meme.bottomText}</h2>
								<a href="">Edit</a>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Gallery;
