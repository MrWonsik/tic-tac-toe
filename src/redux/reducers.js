import { FIELD_CLICKED, RESTART_GAME, SELECT_FIGURE, OPPONENT_FIELD_CLICKED, END_GAME } from "./actions";
import utils from '../gameBoard/utils' 

const initialState = { 
        playerFigure: "", 
        opponentFigure: "",
        isSelectFigureDisabled: false, 
        game: {
            gameStart: false,
            gameEnd: false,
            gameMap: [],
            winFields: [],
            isPlayerTurn: null,
        },
    }

const getOpponentFigure = (playerFigure) => (  playerFigure === "kolo" ? "krzyzyk" : "kolo" );

export const ticTacToe = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_FIGURE: {
            const { figureName } = payload;

            return {
                ...state,
                playerFigure: figureName,
                opponentFigure: getOpponentFigure(figureName),
                isSelectFigureDisabled: true,
                game: {
                    ...state.game,
                    isPlayerTurn: utils.randomBoolean(),
                    gameStart: true
                }
            }
        }
        case FIELD_CLICKED: {
            const { id } = payload;

            return {
                ...state,
                game: {
                    ...state.game,
                    isPlayerTurn: false, 
                    gameMap: [
                        ...state.game.gameMap, 
                        {id: id, val: state.playerFigure}]}
            }
        }
        case RESTART_GAME: {
            return initialState
        }
        case OPPONENT_FIELD_CLICKED: {
            const { id } = payload;

            return {
                ...state,
                game: {
                    ...state.game,
                    isPlayerTurn: true, 
                    gameMap: [
                        ...state.game.gameMap, 
                        {id: id, val: state.opponentFigure}]}
            }
        }
        case END_GAME: {
            const { winFields } = payload;

            return {
                ...state,
                game: {
                    ...state.game,
                    gameEnd: true,
                    winFields: winFields
                }
            }
        }
        default:
            return state;
    }
}