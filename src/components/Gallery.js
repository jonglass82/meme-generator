import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Gallery extends React.Component {
	state = {
		mySavedMemes: [],
		error: ""
	};

	componentDidMount() {
		this.getMyMemes();
	}

	getMyMemes = () => {
		axios.get(`${process.env.REACT_APP_API}/api/memes`).then(response => {
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
				<h3 className="gallery-header">My Gallery ({this.state.mySavedMemes.length})</h3>
				<div className="grid-container">
					{this.state.mySavedMemes.map((meme, index) => {
						console.log(meme._id);
						return (
							<div className="meme" key={index}>
								<img src={meme.memeUrl} alt="" />
								<h1 className="top_gallery">{meme.topText}</h1>
								<h1 className="bottom_gallery">{meme.bottomText}</h1>
								<Link to={{ pathname: "/memes/edit", meme }}>Edit</Link>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Gallery;
