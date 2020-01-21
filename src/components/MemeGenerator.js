import React from 'react'

class MemeGenerator extends React.Component {

  state = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg", 
    allMemeImages: []
  }

  componentDidMount(){
    this.getImages();
  }

  getImages(){
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => this.setState({
        allMemeImages: response.data.memes
      }))
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
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
            
          <button>Gen</button>
      </form>
    )
  }

}

export default MemeGenerator;