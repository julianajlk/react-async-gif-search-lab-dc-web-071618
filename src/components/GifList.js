import React from 'react'

export default class GifList extends React.Component {

  render () {
    // console.log(this)
    // console.log(this.props.data)
    // console.log(this.props.data.data)
    // console.log(typeof gifArray)
    // console.log(this.props.data.data.map(gif => gif.id))
    const gifArray = this.props.data
    return (
      <div>
        <ul>
          {gifArray.map(gif => <li><img key={gif.id} src={gif.images.original.url} alt="gif"/></li>)}
        </ul>
      </div>
      // if (gifArray === !undefined) {
      //   <div>{gifArray.map(gif => <img key={gif.id} src={gif.images.original.url} alt="gif"/>)}</div>
      // } else {
      //   return gifArray
      // }
    )
  }
}
