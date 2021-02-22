import { FIELD_CLICKED, RESTART_GAME, SELECT_FIGURE, OPONENT_FIELD_CLICKED, END_GAME } from "./actions";
import utils from './utils' 

const initialState = { 
        playerFigure: "", 
        oponentFigure: "",
        isSelectFigureDisabled: false, 
        game: {
            gameStart: false,
            gameEnd: false,
            gameMap: [],
            winFields: [],
            isPlayerTurn: null,
        },
    }

const getOponentFigure = (playerFigure) => (  playerFigure === "kolo" ? "krzyzyk" : "kolo" );

export const ticTacToe = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_FIGURE: {
            const { figureName } = payload;

            return {
                ...state,
                playerFigure: figureName,
                oponentFigure: getOponentFigure(figureName),
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
        case OPONENT_FIELD_CLICKED: {
            const { id } = payload;

            return {
                ...state,
                game: {
                    ...state.game,
                    isPlayerTurn: true, 
                    gameMap: [
                        ...state.game.gameMap, 
                        {id: id, val: state.oponentFigure}]}
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