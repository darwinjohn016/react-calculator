import React from 'react'
import {useFunctionContext} from '../Provider'
import {ACTIONS} from '../Reducer'
import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton'

const ButtonBx = () => {

  const dispatch = useFunctionContext();

  return (
    <div style={buttonBxStyles}>

      <button onClick={()=>{dispatch({type:ACTIONS.CLEAR})}}>Clear</button>
      <button onClick={()=>{dispatch({type:ACTIONS.DELETE})}}>Delete</button>
      <NumberButton number="+/-" dispatch={dispatch}/>
      <OperatorButton operator="/" dispatch={dispatch}/>
      <NumberButton number="7" dispatch={dispatch}/>
      <NumberButton number="8" dispatch={dispatch}/>
      <NumberButton number="9" dispatch={dispatch}/>
      <OperatorButton operator="*" dispatch={dispatch}/>
      <NumberButton number="4" dispatch={dispatch}/>
      <NumberButton number="5" dispatch={dispatch}/>
      <NumberButton number="6" dispatch={dispatch}/>
      <OperatorButton operator="-" dispatch={dispatch}/>
      <NumberButton number="1" dispatch={dispatch}/>
      <NumberButton number="2" dispatch={dispatch}/>
      <NumberButton number="3" dispatch={dispatch}/>
      <OperatorButton operator="+" dispatch={dispatch}/>
      <NumberButton number="0" dispatch={dispatch}/>
      <NumberButton number="." dispatch={dispatch}/>
      <OperatorButton operator="%" dispatch={dispatch}/>
      <button onClick={()=>{dispatch({type:ACTIONS.DO_OPERATION})}}>=</button>
    </div>
  )
}

const buttonBxStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridAutoRows: '70px',
}

export default ButtonBx