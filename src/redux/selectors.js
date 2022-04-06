import { createSelector } from 'reselect'

export const getPlayerFigure = state => state.ticTacToe.playerFigure;
export const getOpponentFigure = state => state.ticTacToe.opponentFigure;
export const isFigureSelectDisabled = state => state.ticTacToe.isFigureSelectDisabled;
export const getGame = state => state.ticTacToe.game;

export const getGameMap = createSelector(
    getGame,
    (game) => [...game.gameMap]
)

export const getWinFields = createSelector(
    getGame,
    (game) => game.winFields
);

export const getGameStartFlag = createSelector(
    getGame,
    (game) => game.gameStart
)