import React, { Component } from 'react'

import './Divider.css'

class Divider extends Component {
  render() {
    const { ...styles } = this.props
    return (
      <div className="Divider" style={styles}/>
    )
  }
}

export default Divider