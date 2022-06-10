import React from 'react'
import {ACTIONS} from '../Reducer'

const NumberButton = ({operator,dispatch}) => {
  return (
    <button style={{backgroundColor: 'transparent'}} onClick={
      ()=>{
        return dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operator}})
      }
    }>{operator}</button>
  )
}

export default NumberButton