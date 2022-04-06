import React from "react";
import Field from "./Field.js";
import SelectFigure from "./FigureSelector.js";
import RestartButton from "./RestartButton.js";
import { connect } from 'react-redux';
import { getGameStartFlag, getWinFields } from '../redux/selectors'
import "../App.less";

const GameContainer = ({ winFields, isGameStarted }) => {
  let fields = [];

  for (let i = 1; i < 10; i++) {
    let field = {id: i, shouldBlinked: winFields.includes(i) }
    fields.push(<Field key={i} field={field} />)
  }
  return (<>
          <SelectFigure />
          <div className="container">
            { isGameStarted && 
              <div className="game-container">
                {fields}
              </div>
            }
            <RestartButton />
          </div>
        </>);
}

const mapStateToProps = (state) => ({
  winFields: getWinFields(state),
  isGameStarted: getGameStartFlag(state)
})

export default connect(mapStateToProps, null)(GameContainer);
