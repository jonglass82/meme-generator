import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MemeEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: props.location.meme._id,
			topText: props.location.meme.topText,
			bottomText: props.location.meme.bottomText,
			memeUrl: props.location.meme.memeUrl
		};
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	save = event => {
		event.preventDefault();
		const params = {
			topText: this.state.topText,
			bottomText: this.state.bottomText,
			memeUrl: this.state.randomImage
		};
		const id = this.state._id;
		console.log(params);
		axios
			.patch(`${process.env.REACT_APP_API}/api/memes/${id}`, params)
			.then(response => {
				if (response.status === 200) {
					window.alert("Changes saved to database");
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="memeGen">
				<form className="meme-form">
					<input
						name="topText"
						placeholder="top text"
						value={this.state.topText}
						onChange={this.handleChange}
					/>

					<input
						name="bottomText"
						placeholder="bottomText"
						value={this.state.bottomText}
						onChange={this.handleChange}
					/>

					<button onClick={this.save}>Save</button>
					<Link to={{ pathname: "/memes" }}>
						<button>Back</button>
					</Link>
				</form>

				<div className="meme">
					<img src={this.state.memeUrl} alt="" />
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>
			</div>
		);
	}
}

export default MemeEdit;
