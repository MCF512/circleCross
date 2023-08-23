import { Component } from 'react';
import { Board, Info } from './components';
import { connect } from 'react-redux';

class AppContainer extends Component {
  render() {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="wrapper">
          <Info />
          <Board
            onClick={this.props.handleClick}
          />

          <button className="
          my-0
          mx-auto
          block 
          text-xl
        text-green-400 
          p-4
          border-2
          border-green-400
          rounded
          "
            onClick={this.props.handleReset}>Начать заново</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleReset: () => {
    dispatch(
      { type: 'RESET_GAME' }
    )
  },
  handleClick: (index) => {
    dispatch(
      { type: 'SET_PLAYER', payload: index }
    )
  }
})

export const App = connect(null, mapDispatchToProps)(AppContainer)