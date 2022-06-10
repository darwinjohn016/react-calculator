import React from 'react'
import {ACTIONS} from '../Reducer'

const NumberButton = ({number,dispatch}) => {
  return (
    <button style={{backgroundColor: 'transparent'}} onClick={
      ()=>{
        return dispatch({type:ACTIONS.ADD_NUMBER,payload:{number}})
      }
    }>{number}</button>
  )
}

export default NumberButton