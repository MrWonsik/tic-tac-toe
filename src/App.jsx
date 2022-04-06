import React, { useEffect } from 'react';
import './App.less';
import { connect } from 'react-redux';
import { getGame, getPlayerFigure, getOpponentFigure } from './redux/selectors';
import { opponentClickField, endGame } from './redux/actions';
import GameContainer from './gameBoard/GameContainer';
import utils, { WIN, POSSIBILITY_WIN } from './gameBoard/utils';

function App({
  game, clickFieldByOpponent, endTheGame, playerFigure, opponentFigure,
}) {
  const getAllFields = (figureName) => (
    game.gameMap.filter((field) => field.val === figureName).map((field) => field.id)
  );

  const isFieldEmpty = (fieldId) => (!game.gameMap.some((val) => val.id === fieldId));

  const getOpponentFieldId = () => {
    const getAllPossibilityWiningFieldsFor = (figure) => {
      const possibleMoves = [];

      POSSIBILITY_WIN.forEach((winningFields) => {
        if (utils.containsAll(winningFields, getAllFields(figure))) {
          WIN.forEach((winField) => {
            if (utils.containsAll(winningFields, winField)) {
              winField.forEach((field) => {
                winningFields.forEach((posField) => {
                  if (field !== posField && isFieldEmpty(field)) {
                    possibleMoves.push(field);
                  }
                });
              });
            }
          });
        }
      });
      return possibleMoves;
    };

    const getEmptyRandomField = () => {
      let randomVal;
      do {
        randomVal = utils.randomInteger(9) + 1;
      } while (!isFieldEmpty(randomVal) || game.gameMap.length === 9);

      return randomVal;
    };

    if (game.gameMap.length === 0 || isFieldEmpty(5)) {
      return 5;
    }

    const winningFields = getAllPossibilityWiningFieldsFor(opponentFigure);
    if (winningFields.length > 0) {
      return winningFields[utils.randomInteger(winningFields.length)];
    }

    const blockingFields = getAllPossibilityWiningFieldsFor(playerFigure);
    if (blockingFields.length > 0) {
      return blockingFields[utils.randomInteger(blockingFields.length)];
    }

    return getEmptyRandomField();
  };

  const opponentTurn = () => {
    if (game.gameStart && !game.gameEnd && !game.isPlayerTurn) {
      clickFieldByOpponent(getOpponentFieldId());
    }
  };

  const endGameChecker = (figure) => {
    let winField = [];

    const endGame = WIN.some((val) => {
      if (utils.containsAll(val, getAllFields(figure))) {
        winField = val;
        return true;
      }
      return false;
    });

    if (endGame || game.gameMap.length === 9) {
      endTheGame(winField);
    }
  };

  useEffect(() => {
    endGameChecker(playerFigure);
    if (!game.gameEnd) {
      setTimeout(() => opponentTurn(), 300);
      endGameChecker(opponentFigure);
    }
  }, [game.isPlayerTurn, game.gameEnd]);

  return (
    <GameContainer />
  );
}

const mapStateToProps = (state) => ({
  game: getGame(state),
  playerFigure: getPlayerFigure(state),
  opponentFigure: getOpponentFigure(state),
});

const mapDispatchToProps = (dispatch) => ({
  clickFieldByOpponent: (id) => dispatch(opponentClickField(id)),
  endTheGame: (winFields) => dispatch(endGame(winFields)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
