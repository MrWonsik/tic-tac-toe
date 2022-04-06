import React from 'react';
import { connect } from 'react-redux';
import { selectFigure } from '../redux/actions';
import { getPlayerFigure } from '../redux/selectors';
import '../App.less';

function Figure({
  figureName, icon, onFigureClicked, playerFigure,
}) {
  return (
    <div
      name={figureName}
      className="figure select-figure"
      onClick={() => { if (playerFigure === '') onFigureClicked(figureName); }}
    >
      {icon}
    </div>
  );
}

const mapStateToProps = (state) => ({
  playerFigure: getPlayerFigure(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFigureClicked: (figure) => dispatch(selectFigure(figure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Figure);
