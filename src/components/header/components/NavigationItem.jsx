import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './NavigationItem.css'


class NavigationItem extends Component {

  onClick = (event) => {
    event.preventDefault()
    this.props.onClick(this.props.to, null)
  }

  render() {
    return (
      <div className="NavigationItem">
        <li className={'nav-item' + (this.props.active ? ' active' : '')} onClick={this.onClick}>
          <Link to={this.props.to}>
          <span className="title">
            {(this.props.value).toUpperCase()}
          </span>
          </Link>
        </li>
      </div>
    )
  }
}

NavigationItem.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

NavigationItem.defaultProps = {
  active: false,
}

export default NavigationItem
