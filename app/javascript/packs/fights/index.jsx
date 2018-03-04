import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as CharactersApi from '../api/characters'
import * as FightsApi from '../api/fights'

import FightersPickerModal from './components/fighters-picker-modal.jsx'
import HistoricModal from './components/historic-modal.jsx'

class FightsManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fights: [],
      fighters: [],
      fightStatus: 'preparation'
    }
  }

  componentDidMount() {
    Promise.all([CharactersApi.list(), FightsApi.list()]).then(
      ([fighters, fights]) => {
        this.setState({ fighters, fights })

        $('#fightersPickerModal').on('hidden.bs.modal', () => {
          // reload all the page
          if (this.state.fightResult) {
            location.href = '/'
          } else {
            // reinitialize the state
            this.setState({
              fightStatus: 'preparation',
              fightResult: null,
              error: null
            })
          }
        })
      }
    )
  }

  componentWillUnmount() {
    // prevent leak memory
    $('#fightersPickerModal').off('hidden.bs.modal')
  }

  handleFight(pretendors) {
    if (pretendors[0] === pretendors[1]) {
      this.setState({ error: 'Please choose 2 different pretendors' })
    } else {
      this.setState({ error: null, fightStatus: 'pending' })
      FightsApi.create(pretendors).then(fightResult =>
        setTimeout(
          // we simulate that a very smart fight algo is running server side
          () => this.setState({ fightResult, fightStatus: 'done' }),
          600
        )
      )
    }
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#fightersPickerModal"
        >
          Start a fight !
        </button>
        <button
          className="btn btn-primary btn-lg ml-3"
          data-toggle="modal"
          data-target="#historicModal"
        >
          See previous fights
        </button>
        {this.state.fighters.length ? (
          <FightersPickerModal
            {...this.state}
            handleFight={fighters => this.handleFight(fighters)}
          />
        ) : null}
        {this.state.fights.length ? (
          <HistoricModal fights={this.state.fights} />
        ) : null}
      </div>
    )
  }
}

ReactDOM.render(<FightsManager />, document.getElementById('FightsManager'))
