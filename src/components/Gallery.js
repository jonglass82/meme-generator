import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

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
							<container>
								<row>
									<Col>
										<div className="meme" key={index}>
											<img src={meme.memeUrl} alt="" thumbnail fluid />
											<div className="top_gallery">
												<h1>{meme.topText}</h1>
											</div>
											<div className="bottom_gallery">
												<h1>{meme.bottomText}</h1>
											</div>
											
											<Link to={{ pathname: "/memes/edit", meme }}>Edit</Link>
										</div>
									</Col>
								</row>
							</container>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Gallery;
