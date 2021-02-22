import React from "react";
import { connect } from 'react-redux';
import { getGame } from './selectors';
import { restartGame } from './actions';
import "../App.less";
import { RiRestartLine } from "react-icons/ri";

const RestartButton = ({ gameStart, restartGame }) => {
  if (gameStart) {
    return (
      <div className="restart-button" onClick={() => restartGame() }>
        <RiRestartLine />
      </div>
    );
  }

  return null;
}

const mapStateToProps = (state) => ({
  gameStart: getGame(state).gameStart
})

const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(restartGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestartButton);
