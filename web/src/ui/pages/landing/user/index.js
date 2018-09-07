import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'

class UserLanding extends Component {
  render() {
    return (
      <div>
        this is our landing page
      </div>
    )
  }
}

export default CSSModules(UserLanding, css)
