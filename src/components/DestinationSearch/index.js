// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="search-icon"
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <DestinationItem destinationDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
