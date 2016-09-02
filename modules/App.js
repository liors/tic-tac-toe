import React from 'react'
import { connect } from 'react-redux'
import Grid from './grid/Grid'
import WinnerBar from './winnerBar/WinnerBar'
import actions from '../redux/actions'
import './app.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, (params) => {
            this.props.dispatch(actions.settingsUpdated(params))
        });

        Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, (data) => {
            //this.props.dispatch(actions.playerChanged(data.player))
        });
    }

    render() {
        return (
            <div className='app'>
                <Grid fields={this.props.fields} click={(fieldId) => { this.props.dispatch(actions.click(fieldId)) }}/>
                <WinnerBar id={this.props.winningCombination}
                           shouldShowWinner={this.props.shouldShowWinnerBar}
                           click={ () => { this.props.dispatch(actions.resetGame())}}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App)
