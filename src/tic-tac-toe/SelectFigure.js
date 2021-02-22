import React from "react";
import Figure from "./Figure.js";
import { connect } from 'react-redux';
import { ImCross } from "react-icons/im";
import { BsCircle } from "react-icons/bs";
import { isSelectFigureDisabled } from "./selectors"
import "../App.less";

const SelectFigure = ({isSelectFigureDisabled}) => (
  <div className={"select-figure-container" + (isSelectFigureDisabled ? " disabled" : "") }>
    <Figure figureName="kolo" icon={<BsCircle />}/>
    <Figure figureName="krzyzyk" icon={<ImCross />}/>
  </div>
)

const mapStateToProps = state => ({
  isSelectFigureDisabled: isSelectFigureDisabled(state),
})

export default connect(mapStateToProps, null)(SelectFigure);
