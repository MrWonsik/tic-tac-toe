export const SELECT_FIGURE = 'SELECT_FIGURE';
export const selectFigure = (figureName) => ({
  type: SELECT_FIGURE,
  payload: { figureName },
});

export const FIELD_CLICKED = 'FIELD_CLICKED';
export const clickField = (id) => ({
  type: FIELD_CLICKED,
  payload: { id },
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME,
});

export const OPPONENT_FIELD_CLICKED = 'OPPONENT_FIELD_CLICKED';
export const opponentClickField = (id) => ({
  type: OPPONENT_FIELD_CLICKED,
  payload: { id },
});

export const END_GAME = 'END_GAME';
export const endGame = (winFields) => ({
  type: END_GAME,
  payload: { winFields },
});
