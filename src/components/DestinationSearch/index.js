// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <input type="search" />
        <ul className="list-container">
          {destinationsList.map(eachUser => (
            <DestinationItem destinationDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
