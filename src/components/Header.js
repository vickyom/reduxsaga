import React from 'react'


class Header extends React.Component {
  render() {
  
      return (
        <div className="navbar navbar-dark bg-primary">
            <nav>
            <a className="text-body" href="/" >Home | </a>
            <a className="text-body" href="/news" >News | </a>
            <a className="text-body" href="/movies" >Moies | </a>
            </nav>
        </div>
      )

  }
}

// Header.propTypes = {
//   actions: PropTypes.object.isRequired
// }

export default Header
