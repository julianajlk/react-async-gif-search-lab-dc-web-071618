import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

// //do if/ternary on GifList so that it doesn't map undefined data: []
//   handleSubmit = event => {
//     event.preventDefault()
//     // console.log(event.target.children[0].value)
//     fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.children[0].value}&api_key=dc6zaTOxFJmzC&rating=g`)
//       .then(res => res.json())
//       .then(json => {this.setState({data: json})})
//   }

  handleSubmit = event => {
    event.preventDefault()
    // console.log(event.target.children[0].value)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.children[0].value}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(json => {this.setState({data: json.data})})
    event.target.reset()
  }

  render() {
    return (
    <div><GifList data={this.state.data}/><GifSearch handleSubmit={this.handleSubmit} updateState={(value) => this.updateState(value)}/>

    </div>
    )
  }
}
