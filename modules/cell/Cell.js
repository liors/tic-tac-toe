import React from 'react'
import './cell.scss'

export default class Cell extends React.Component {
  handleClick () {
    this.props.click(this.props.id);
  }

  render () {
    return (
      <div className={"cell play wix-style cell-" + this.props.id} onMouseDown={() => {this.handleClick()}}>{this.props.stone}</div>
    )
  }
}