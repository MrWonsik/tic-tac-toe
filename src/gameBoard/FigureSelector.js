import React from "react";
import Figure from "./Figure.js";
import { connect } from 'react-redux';
import { ImCross } from "react-icons/im";
import { BsCircle } from "react-icons/bs";
import { isFigureSelectDisabled } from "../redux/selectors"
import "../App.less";

const SelectFigure = ({ isFigureSelectDisabled }) => (
  <div className={"select-figure-container" + (isFigureSelectDisabled ? " disabled" : "") }>
    <Figure figureName="kolo" icon={<BsCircle />}/>
    <Figure figureName="krzyzyk" icon={<ImCross />}/>
  </div>
)

const mapStateToProps = state => ({
  isFigureSelectDisabled:  isFigureSelectDisabled(state),
})

export default connect(mapStateToProps, null)(SelectFigure);
