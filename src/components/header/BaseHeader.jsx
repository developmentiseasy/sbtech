import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as navActions from '../../actions/NavigationActions'
import NavigationItem from './components/NavigationItem'
import * as _ from 'lodash'

import './BaseHeader.css'
import NavigationDropdownItem from './components/NavigationDropdownItem'


class BaseHeader extends Component {

  isActiveSubItem = (itemPath) => {
    const {
      location,
      locationPath,
    } = this.props
    const path = location || locationPath

    return !path || path === '/' ? false : path === itemPath || _.includes(path, itemPath)
  }

  render() {
    const {
      navActions: {
        changeLocation,
      },
    } = this.props
    return (
      <div className="BaseHeader">
        <ul className="navigation-items">
          <NavigationItem
            to={'/home'}
            active={this.isActiveSubItem('/home')}
            value={'Home'.toUpperCase()}
            onClick={changeLocation}
          />
          <NavigationItem
            to={'/sports'}
            active={this.isActiveSubItem('/sports')}
            value={'Sports'.toUpperCase()}
            onClick={changeLocation}
          />
          <NavigationItem
            to={'/casino'}
            active={this.isActiveSubItem('/casino')}
            value={'Casino'.toUpperCase()}
            onClick={changeLocation}
          />
          <NavigationDropdownItem value={"Games".toUpperCase()}>
            <NavigationItem
              to={'/games/mega-moolah'}
              active={this.isActiveSubItem('/games/mega-moolah')}
              value={'Mega Moolah'}
              onClick={changeLocation}
            />
            <NavigationItem
              to={'/games/the-curse-of-the-black-pearl'}
              active={this.isActiveSubItem('/games/the-curse-of-the-black-pearl')}
              value={'The curse of the black Pearl'}
              onClick={changeLocation}
            />
            <NavigationItem
              to={'/games/super-slots-attack'}
              active={this.isActiveSubItem('/games/super-slots-attack')}
              value={'Super slots attack'}
              onClick={changeLocation}
            />
          </NavigationDropdownItem>
        </ul>
      </div>
    )
  }
}

BaseHeader.propTypes = {
  locationPath: PropTypes.string,
}

function mapStateToProps({ navigation }) {
  return {
    location: navigation.location,
    openedItem: navigation.openedItem,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navActions: bindActionCreators(navActions, dispatch),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(BaseHeader),
)