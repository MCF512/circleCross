import { Component } from 'react';
import { connect } from 'react-redux';

class InfoContainer extends Component {

  render() {
    return (
      <div className='text-3xl text-center text-green-500 mb-5  font-bold'>
        {this.props.isDraw ? 'Ничья' : this.props.isGameEnded ? `Победа ${this.props.currentPlayer}` : `Ход ${this.props.currentPlayer}`}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isDraw: state.isDraw,
  isGameEnded: state.isGameEnded,
  currentPlayer: state.currentPlayer
})

export const Info = connect(mapStateToProps)(InfoContainer)