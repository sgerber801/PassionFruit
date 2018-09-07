import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'

class AdminLanding extends Component {
  render() {
    return (
      <div>

          <img src="http://www.albaninspect.com/wp-content/themes/albaninspect/images/banner-1.jpg" alt="Home pic"></img>

      </div>
    )
  }
}

export default CSSModules(AdminLanding, css)
