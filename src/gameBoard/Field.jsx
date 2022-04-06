import React from 'react';
import { connect } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { BsCircle } from 'react-icons/bs';
import { getGame } from '../redux/selectors';
import { clickField } from '../redux/actions';
import '../App.less';

function Field({ field, fieldsClicked, game }) {
  const returnFigure = (name) => (
    (name === 'kolo')
      ? <BsCircle className={field.shouldBlinked ? 'blinked' : ''} />
      : <ImCross className={field.shouldBlinked ? 'blinked' : ''} />
  );

  const handleFieldClick = () => {
    const checkIfFieldsIsEmpty = (id) => (!game.gameMap.some((val) => val.id === id));
    if (game.gameStart && !game.gameEnd && game.isPlayerTurn && checkIfFieldsIsEmpty(field.id)) {
      fieldsClicked(field.id);
    }
  };

  const fieldFigure = game.gameMap.find((searchField) => searchField.id === field.id);
  return (
    <div className="field-container" onClick={handleFieldClick}>
      {fieldFigure && returnFigure(fieldFigure.val)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  game: getGame(state),
});

const mapDispatchToProps = (dispatch) => ({
  fieldsClicked: (id) => dispatch(clickField(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
