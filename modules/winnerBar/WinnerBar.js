import React from 'react'
import './winnerBar.scss'

export default class WinnerBar extends React.Component {
    showWinner () {
        if (_.isString(this.props.id) && _.isBoolean(this.props.shouldShowWinner) && this.props.shouldShowWinner) {
            return 'Winner combination is ' + this.props.id;
        }
    }
    render () {
        return (
            <div className="winnerBar wix-style" onMouseDown={() => { this.props.click() }}>
                {this.showWinner()}
            </div>
        )
    }
}
