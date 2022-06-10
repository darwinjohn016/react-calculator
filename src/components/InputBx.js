import React from 'react'
import Input from './Input'
import { useStateContext } from '../Provider'


const InputBx = () => {

	const state = useStateContext();

  return (
    <div >
        <Input state={state.previousOperand}/>
        <Input size="1.3rem" state={state.currentOperand}/>
    </div>
  )
}




export default InputBx