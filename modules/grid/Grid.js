import React from 'react'
import Row from '../row/row'
import './grid.scss'


export default class Grid extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="grid wix-style">
                <Row fields={this.props.fields} click={this.props.click} numberOfCell="3" index={0}/>
                <Row fields={this.props.fields} click={this.props.click} numberOfCell="3" index={1}/>
                <Row fields={this.props.fields} click={this.props.click} numberOfCell="3" index={2}/>
            </div>
        )
    }
}
