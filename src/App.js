import React, { useEffect } from "react";
import "./App.less";
import { connect } from 'react-redux';
import { getGame, getPlayerFigure, getOponentFigure } from './tic-tac-toe/selectors';
import { oponentClickField, endGame } from './tic-tac-toe/actions'
import GameContainer from "./tic-tac-toe/GameContainer.js";
import utils, {WIN, POSIBILITY_WIN} from "./tic-tac-toe/utils";

const App = ({ game, clickFieldByOponent, endTheGame, playerFigure, oponentFigure }) => {

  useEffect(() => {
    endGameChecker(playerFigure);
    if(!game.gameEnd) {
      setTimeout(() => oponentTurn(), 300);
      endGameChecker(oponentFigure);
    }
  }, [game.isPlayerTurn, game.gameEnd]);

  const getOponentFieldId = () => {
    if (game.gameMap.length === 0 || isFieldEmpty(5)) { 
      return 5;
    }

    var winningFields = getAllPosibilityWiningFieldsFor(oponentFigure);
    if (winningFields.length > 0) {
      return winningFields[utils.randomInteger(winningFields.length)];
    } 

    var blockingFields = getAllPosibilityWiningFieldsFor(playerFigure);
    if (blockingFields.length > 0) {
      return blockingFields[utils.randomInteger(blockingFields.length)];
    }

    return getEmptyRandomField();
  };

  const getAllPosibilityWiningFieldsFor = (figure) => {
    var posibileMoves = [];

    POSIBILITY_WIN.forEach((winningFields) => {
      if (utils.containsAll(winningFields, getAllFields(figure))) {
        WIN.forEach((winField) => {
          if (utils.containsAll(winningFields, winField)) {
            winField.forEach((field) => {
              winningFields.forEach((posField) => {
                if (field !== posField && isFieldEmpty(field)) {
                  posibileMoves.push(field);
                }
              });
            });
          }
        });
      }
    });
    return posibileMoves;
  };

  const getAllFields = (figureName) => (game.gameMap.filter((field) => field.val === figureName).map((field) => field.id));

  const getEmptyRandomField = () => {
    do {
      var randomVal = utils.randomInteger(9) + 1;
    } while (!isFieldEmpty(randomVal) || game.gameMap.length === 9);

    return randomVal;
  };

  const isFieldEmpty = (fieldId) => (!game.gameMap.some((val) => val.id === fieldId));

  const oponentTurn = () => {
    if (game.gameStart && !game.gameEnd && !game.isPlayerTurn) {
      clickFieldByOponent(getOponentFieldId());
    }
  };

  const endGameChecker = (figure) => {
      var winField = [];

      var endGame = WIN.some(val => {
        if (utils.containsAll(val, getAllFields(figure))) {
          winField = val;
          return true;
        }
      });

      if (endGame || game.gameMap.length === 9) {
        endTheGame(winField);
      }
  }

  return (
    <GameContainer />
  );
}

  
const mapStateToProps = (state) => ({
  game: getGame(state),
  playerFigure: getPlayerFigure(state),
  oponentFigure: getOponentFigure(state),
})

const mapDispatchToProps = dispatch => ({
  clickFieldByOponent: (id) => dispatch(oponentClickField(id)),
  endTheGame: (winFields) => dispatch(endGame(winFields))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
