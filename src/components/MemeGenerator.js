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

  generate = (event) => {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * 100)
    console.log(this.state.allMemeImages[randNum])
    this.setState({randomImage: this.state.allMemeImages[randNum].url})
  }

  render () {
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
              
            <button onClick={this.generate}>Gen</button>

            
        </form>

        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }

}

export default MemeGenerator;