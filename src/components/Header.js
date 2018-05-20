import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
  
      return (
        <div className="navbar navbar-dark bg-dark pd-10">
            <nav>
            <Link to="/" >Home | </Link>
            <Link to="/news" >News | </Link>
            <Link to="/movies" >Moies | </Link>
            </nav>
        </div>
      )

  }
}

// Header.propTypes = {
//   actions: PropTypes.object.isRequired
// }

export default Header
