/* eslint-disable no-console */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Input } from 'semantic-ui-react'
import CSSModules from 'react-css-modules'

import css from './index.css'

class Footer extends Component {
  handleFacebook = () => {
    console.log('The user has interest in FB')
  }
  handleLinkedIn = () => {
    console.log('The user has interest in LinkedIn')
  }
  handleTwitter = () => {
    console.log('The user has interest in Twitter')
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="section">
          <div styleName="section-row">
            <div styleName="sub-section-item">

            </div>
            <div styleName="sub-section-item-email">
              <span>Sign Up For Our Newsletter</span>
            </div>
          </div>
          <div styleName="section-row">
            <div styleName="sub-section-item-column">


            </div>
            <div styleName="sub-section-item-row">
              
            <Button><Link to="/about-us">Home</Link></Button>
            <Button><Link to="/about-us">Mission Statement</Link></Button>
            <Button><Link to="/about-us">Testimonials</Link></Button>
            <Button><Link to="/about-us">Schedule a Consultation</Link></Button>
            <Button><Link key="login" to="/login">
              Login</Link>
            </Button>
            <div styleName="sub-section-item-column">
              <Link to="/about-us">FAQs</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
            <Button basic icon onClick={this.handleFacebook}><Icon name="facebook f" color="orange" /></Button>
            <Button basic icon onClick={this.handleTwitter}><Icon name="twitter" color="orange" /></Button>
            <Button basic icon onClick={this.handleLinkedIn}><Icon name="linkedin" color="orange" /></Button>

            

            </div>
            <div styleName="sub-section-item-email">
              <Input action={{ color: 'orange', content: 'Submit' }} placeholder="Your Email" />
            </div>
          </div>
        </div>
        <div styleName="section-copyright">
          <div><Icon name="copyright" />HQ Home Inspections 2018. All Rights Resevered</div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Footer, css)
