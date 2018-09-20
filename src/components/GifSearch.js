import React from 'react'

export default class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="search" placeholder="search..." onChange={event => this.setState({ search: event.target.value})} >
          </input>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
