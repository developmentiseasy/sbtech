import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NavigationDropdownItem.css'

class NavigationDropdownItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  onClick = () => {
    this.setState({
      isVisible: this.state.isVisible ? false : true,
    })
    console.log('onClick')
  }

  onMouseLeave = () => {
    this.setState({
      isVisible: this.state.isVisible === true ? false : false,
    })
  }

  render() {
    const {
      value,
      children,
    } = this.props

    return (
      <div className="NavigationDropdownItem" onMouseLeave={this.onMouseLeave}>
        <div className={`nav-item ${this.state.isVisible ? 'active' : ''}`} onClick={this.onClick}>
          <span className="title">{(value).toUpperCase()}</span>
        </div>
        <div className={`dropdown-content ${this.state.isVisible ? '' : 'hidden'}`}>
          {children}
        </div>
      </div>
    )
  }
}

NavigationDropdownItem.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default NavigationDropdownItem
