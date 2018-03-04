import React, { Component } from 'react'

class HistoricModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className="modal fade"
        id="historicModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="historicModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="historicModalLabel">
                Fights historic
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
            <div className="modal-body">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Winner</th>
                    <th scope="col">Loser</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.fights.map((fight, index) => (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{fight.winner}</td>
                      <td>{fight.loser}</td>
                      <td>{new Date(fight.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HistoricModal
