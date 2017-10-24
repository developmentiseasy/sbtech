import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import BaseHeader from '../components/header/BaseHeader'

import { Routes } from '../routes'

import './BaseContainer.css'


class BaseContainer extends Component {

  renderMainWrapper = () => (
    <div className="BaseContainer">
      <BaseHeader locationPath={this.props.location.pathname} />
      <div id="wrapper">
        <div id="middle">
          <div id="content">
            <div id="colLeft">
              <Routes />
            </div>
            <div id="colRight">
              <div className="text">
                <h1>Sidebar Body</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  render() {
    return this.renderMainWrapper()
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BaseContainer))