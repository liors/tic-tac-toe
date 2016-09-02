import React from 'react'
import Cell from '../cell/Cell'
import _ from 'lodash'
import './row.scss'

export default class Row extends React.Component {
  getId(index) {
    if (this.props.index === 0) {
        return index;
    } else if (this.props.index === 1) {
        return 3 + index;
    } else {
        return 6 + index;
    }
  }
  render () {
    return (
      <div className='row'>
        <Cell click={this.props.click} id={this.getId(0)} stone={this.props.fields[this.getId(0)]}/>
        <Cell click={this.props.click} id={this.getId(1)} stone={this.props.fields[this.getId(1)]}/>
        <Cell click={this.props.click} id={this.getId(2)} stone={this.props.fields[this.getId(2)]}/>
      </div>
    )
  }
}
