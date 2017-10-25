import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Divider from '../divider/Divider'

import './PageTitle.css'


class PageTitle extends Component {
  render() {
    const { title } = this.props
    return (
      <div className="PageTitle">
        <h1 className="pahe-title">{title}</h1>
        <Divider/>
      </div>
    )
  }
}

PageTitle.propTypes = {
  title: PropTypes.string,
}

export default PageTitle
