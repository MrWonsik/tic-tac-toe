import React from 'react';
import { connect } from 'react-redux';
import { RiRestartLine } from 'react-icons/ri';
import { getGame } from '../redux/selectors';
import { restartGame } from '../redux/actions';
import '../App.less';

function RestartButton({ gameStart, restartGame }) {
  if (gameStart) {
    return (
      <div className="restart-button" onClick={() => restartGame()}>
        <RiRestartLine />
      </div>
    );
  }

  return null;
}

const mapStateToProps = (state) => ({
  gameStart: getGame(state).gameStart,
});

const mapDispatchToProps = (dispatch) => ({
  restartGame: () => dispatch(restartGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestartButton);
