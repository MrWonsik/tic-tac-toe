import React from "react";
import { connect } from 'react-redux';
import { selectFigure } from './actions'
import { getPlayerFigure } from './selectors'
import "../App.less";

const Figure = ({ figureName, icon, onFigureClicked, playerFigure }) => (
    <div 
      name={figureName}
      className="figure select-figure"
      onClick={() => { if(playerFigure === "") onFigureClicked(figureName); }}
    >
      {icon}
    </div>
)

const mapStateToProps = state => ({
  playerFigure: getPlayerFigure(state),
})

const mapDispatchToProps = dispatch => ({
  onFigureClicked: figure => dispatch(selectFigure(figure))
})

export default connect(mapStateToProps, mapDispatchToProps)(Figure);
