import React, { Component } from 'react'

import { LOREM_TEXT } from '../constants/PagesConstants'

import PageTitle from '../../components/page-title/PageTitle'

import './SportsPage.css'

const PAGE_TITLE = 'Sports Page'

class SportsPage extends Component {
  render() {
    return (
      <div className="SportsPage">
        <PageTitle title={PAGE_TITLE}/>
        <p>{LOREM_TEXT}</p>
      </div>
    )
  }
}

export default SportsPage
