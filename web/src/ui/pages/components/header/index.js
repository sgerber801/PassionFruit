
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import connected from '../../../../state/connect'
import { selector as user } from '../../../../process/users/reducer'
// import Logo from './logo.svg'
import css from './index.css'
import UserLinks from './user-dropdown'
import DefaultLinks from './nav-links'

class Header extends Component {
  render() {
    const { active } = this.props.user
    const rightSide = active ? <UserLinks /> : <DefaultLinks />

    return (
      <div styleName="container">
        <Link to="/">
          <img src="data:image/webp;base64,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" alt="Home pic"></img>
        </Link>
        <div styleName="active-links">
          {rightSide}
        </div>
      </div>
    )
  }
}

export default connected([user], [])(CSSModules(Header, css))
