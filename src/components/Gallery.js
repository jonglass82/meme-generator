import React from "react";
import axios from "axios";

class Gallery extends React.Component {
	state = {
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
		mySavedMemes: [],
		error: ""
	};

	componentDidMount() {
		this.getImages();
    this.getMyMemes();
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

  getMyMemes = () => {
    axios.get("http://localhost:3001/api/memes").then(response => {
      const myMemes = response.data
      this.setState({
        mySavedMemes: myMemes
      })
    })
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
			

        <div className="myMemes">
          <h1>My Gallery ({this.state.mySavedMemes.length})</h1>
            <div className="grid-container">
                  {this.state.mySavedMemes.map((meme) => {
                    return <div className="meme">
                      <img src={meme.memeUrl} alt="" />
                      <h2 className="top">{meme.topText}</h2>
                      <h2 className="bottom">{meme.bottomText}</h2>
                      <a href="">Edit</a>
                    </div>
                  })
                }
            </div>
        </div>
		);
	}
}



export default Gallery

