import React from 'react';
import { connect } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { BsCircle } from 'react-icons/bs';
import Figure from './Figure';
import { isFigureSelectDisabled } from '../redux/selectors';
import '../App.less';

function SelectFigure({ isFigureSelectDisabled }) {
  return (
    <div className={`select-figure-container${isFigureSelectDisabled ? ' disabled' : ''}`}>
      <Figure figureName="kolo" icon={<BsCircle />} />
      <Figure figureName="krzyzyk" icon={<ImCross />} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isFigureSelectDisabled: isFigureSelectDisabled(state),
});

export default connect(mapStateToProps, null)(SelectFigure);
