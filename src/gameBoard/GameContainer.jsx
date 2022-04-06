import React from 'react';
import { connect } from 'react-redux';
import Field from './Field';
import SelectFigure from './FigureSelector';
import RestartButton from './RestartButton';
import { getGameStartFlag, getWinFields } from '../redux/selectors';
import '../App.less';

function GameContainer({ winFields, isGameStarted }) {
  const fields = [];

  for (let i = 1; i < 10; i += 1) {
    const field = { id: i, shouldBlinked: winFields.includes(i) };
    fields.push(<Field key={i} field={field} />);
  }
  return (
    <>
      <SelectFigure />
      <div className="container">
        { isGameStarted
              && (
              <div className="game-container">
                {fields}
              </div>
              )}
        <RestartButton />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  winFields: getWinFields(state),
  isGameStarted: getGameStartFlag(state),
});

export default connect(mapStateToProps, null)(GameContainer);
