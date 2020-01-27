import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MemeEdit = props => {
	const meme = props.location.meme;
	console.log(meme);

	return (
		<div className="memeGen">
			<form className="meme-form">
				<input
					name="topText"
					placeholder="top text"
					value={meme.topText}
					// onChange={this.handleChange}
				/>

				<input
					name="bottomText"
					placeholder="bottomText"
					value={meme.bottomText}
					// onChange={this.handleChange}
				/>

				<button>Save</button>
				<Link to={{ pathname: "/memes" }}>
					<button>Back</button>
				</Link>
			</form>

			<div className="meme">
				<img src={meme.memeUrl} alt="" />
				<h2 className="top">{meme.topText}</h2>
				<h2 className="bottom">{meme.bottomText}</h2>
			</div>
		</div>
	);
};

export default MemeEdit;
