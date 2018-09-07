// TODO Challenge 4
// Add a loading spinner for when waiting on the API to give the green light
// Show an error message when the use enters bad data.
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import { Button, Icon, Input } from 'semantic-ui-react'

import css from './index.css'
import { loginProcess } from '../../../process/users/auth'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: false
    }
  }

  handleInputEmail = (event) => {
    event.preventDefault()
    this.setState({ email: event.target.value })
  }

  handleInputPassword = (event) => {
    event.preventDefault()
    this.setState({ password: event.target.value })
  }

  handleClick = () => {
    const { email, password } = this.state
    this.props.loginProcess(email, password)
  }

  render() {
    return (
      <div>
        <div styleName="title">Welcome to HQ Home Inspections</div>
        <div styleName="lds-ripple"><div></div><div></div></div>
        <div styleName="description"> Admin Access Please Sign In</div>
        {this.state.loading ? <div styleName="loading" /> : null}
        {this.state.error ? <div>Incorect, Please try again</div> : null}
        <form styleName="form">
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Email" type="text"
            value={this.state.email} onChange={this.handleInputEmail} />
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Password" type="password"
            value={this.state.password} onChange={this.handleInputPassword} />
          <Button type="button" animated color="green" onClick={this.handleClick}>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </form>
        <Link to="/forgotten-password">Forgot Your Password?</Link>
      </div>
    )
  }
}

export default loginProcess(CSSModules(Login, css))
