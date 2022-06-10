import React from 'react'
import InputBx from './InputBx'
import ButtonBx from './ButtonBx'
import { useModalFunctionContext} from '../Provider'

const Container = () => {

  const setModal = useModalFunctionContext();
  return (
    <div style={containerStyles}>
        <InputBx/>
        <button onClick={()=>{
        return setModal({type: 'open-modal'})
        }}>Open History</button>
        <ButtonBx/>
    </div>
  )
}

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '550px',
  width: 'min(90%,350px)',
  boxShadow: `1px 1px 15px rgba(255,255,255,0.1), 
  -1px -1px 15px rgba(0,0,0,0.1)`,
  justifyContent: 'space-evenly',
  borderRadius: '4px'
}

export default Container