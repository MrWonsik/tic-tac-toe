import React from 'react';
import { connect } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { BsCircle } from 'react-icons/bs';
import Figure from './Figure';
import { isFigureSelectorDisabled } from '../redux/selectors';
import '../App.less';

function SelectFigure({ isFigureSelectorDisabled }) {
  return (
    <div className={`select-figure-container${isFigureSelectorDisabled ? ' disabled' : ''}`}>
      <Figure figureName="kolo" icon={<BsCircle />} />
      <Figure figureName="krzyzyk" icon={<ImCross />} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isFigureSelectorDisabled: isFigureSelectorDisabled(state),
});

export default connect(mapStateToProps, null)(SelectFigure);
