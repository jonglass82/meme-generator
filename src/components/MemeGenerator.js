import React from "react";
import axios from "axios";

class MemeGenerator extends React.Component {
	state = {
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
		allMemeImages: [],
		error: ""
	};

	componentDidMount() {
		this.getImages();
	}

	getImages() {
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				if (response.success !== true) {
					this.setState({ error: response.error_message });
					return;
				}
				this.setState({
					allMemeImages: response.data.memes
				});
			})
			.catch(err => {
				this.setState({ error: "API ERROR" });
			});
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	generate = event => {
		event.preventDefault();
		const randNum = Math.floor(Math.random() * this.state.allMemeImages.length);
		this.setState({ randomImage: this.state.allMemeImages[randNum].url });
	};

	save = event => {
		event.preventDefault();
		const params = {
			topText: this.state.topText,
			bottomText: this.state.bottomText,
			memeUrl: this.state.randomImage
		};
		console.log(params);
		axios
			.post("http://localhost:3001/api/memes", params)
			.then(response => {
				if (response.status === 200) {
					window.alert("Meme saved to database");
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		if (this.state.error) {
			return <h1>{this.state.error}</h1>;
		}
		return (
			<div>
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

					<button onClick={this.generate}>New Meme</button>
					<button onClick={this.save}>Save</button>
				</form>

				<div className="meme">
					<img src={this.state.randomImage} alt="" />
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>
			</div>
		);
	}
}

export default MemeGenerator;
