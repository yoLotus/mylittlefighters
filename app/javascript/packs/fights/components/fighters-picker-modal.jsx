import React, { Component } from 'react'

class FightersPickerModal extends Component {
  constructor(props) {
    super(props)

    // private state of this component to handle thumb pictures display
    this.state = {
      fighter1: this.props.fighters[0].id,
      fighter2: this.props.fighters[1].id
    }
  }

  onSubmit(event) {
    event.preventDefault()
    console.log('submit !')
    this.props.handleFight([this.state.fighter1, this.state.fighter2])
  }

  displayAvatar(fighterId) {
    if (fighterId && this.props.fighters.length) {
      return this.props.fighters.find(f => f.id === Number(fighterId))
        .avatar_thumb_url
    }
    return null
  }

  displayPretendors() {
    // show the winner if exists
    if (this.props.fightResult) {
      return (
        <div className="d-flex justify-content-center align-items-center">
          <img src={this.displayAvatar(this.props.fightResult.winner_id)} />
          <h1 className="font-weight-bold">Winner !</h1>
        </div>
      )
    } else {
      // display pretendors about to fight
      return (
        <div className="d-flex justify-content-around align-items-center">
          <img src={this.displayAvatar(this.state.fighter1)} />
          <h1 className="font-weight-bold">VS</h1>
          <img src={this.displayAvatar(this.state.fighter2)} />
        </div>
      )
    }
  }

  displayActionButtons() {
    let CloseButton = ({ text }) => (
      <button type="button" className="btn btn-secondary" data-dismiss="modal">
        {text}
      </button>
    )

    switch (this.props.fightStatus) {
      case 'preparation':
        return (
          <div className="modal-footer">
            <CloseButton text={'Keep Calm'} />
            <button type="submit" className="btn btn-primary">
              Let's Fight !
            </button>
          </div>
        )
        break
      case 'pending':
        return (
          <div className="modal-footer">
            <CloseButton text={'Keep Calm'} />
            <button type="button" className="btn btn-primary">
              <i className="fa fa-spinner fa-spin" /> Fighting...
            </button>
          </div>
        )
        break
      // done
      default:
        return (
          <div className="modal-footer">
            <CloseButton text={'Back'} />
          </div>
        )
    }
  }

  render() {
    return (
      <div
        className="modal fade"
        id="fightersPickerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="fightersPickerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="fightersPickerModalLabel">
                Who's next ?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={event => this.onSubmit(event)}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="fighter1">Fighter 1</label>
                  <select
                    onChange={e => this.setState({ fighter1: e.target.value })}
                    className="form-control"
                    id="fighter1"
                    disabled={this.props.fightStatus !== 'preparation'}
                  >
                    {this.props.fighters.map(fighter => (
                      <option key={`1_${fighter.id}`} value={fighter.id}>
                        {fighter.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fighter2">Fighter 2</label>
                  <select
                    onChange={e => this.setState({ fighter2: e.target.value })}
                    className="form-control"
                    id="fighter2"
                    value={this.state.fighter2}
                    disabled={this.props.fightStatus !== 'preparation'}
                  >
                    {this.props.fighters.map((fighter, index) => (
                      <option key={`2_${fighter.id}`} value={fighter.id}>
                        {fighter.name}
                      </option>
                    ))}
                  </select>
                </div>
                {this.displayPretendors()}
                <p className="text-danger">{this.props.error}</p>
              </div>
              {this.displayActionButtons()}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default FightersPickerModal
