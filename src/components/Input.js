import React from 'react'

const Input = ({state,size}) => {
  return (
    <>
        <input placeholder={0} value={state} style={Object.assign({},inputStyle,{fontSize:size})}></input>
    </>
  )
}

const inputStyle = {
  width: '100%',
  textAlign: 'right',
  backgroundColor: 'rgb(226 226 226)',
}

export default Input