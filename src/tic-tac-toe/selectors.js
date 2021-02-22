import { createSelector } from 'reselect'

export const getPlayerFigure = state => state.ticTacToe.playerFigure;
export const getOponentFigure = state => state.ticTacToe.oponentFigure;
export const isSelectFigureDisabled = state => state.ticTacToe.isSelectFigureDisabled;
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