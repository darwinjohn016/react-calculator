import React, {useEffect,useReducer,useContext,createContext} from 'react'

import {reducer,setModal} from './Reducer'

const StateContext = createContext();
const FunctionContext = createContext();
const ModalContext = createContext();
const ModalFunctionContext = createContext();

export const useStateContext =()=>{
    return useContext(StateContext)
}

export const useFunctionContext =()=>{
    return useContext(FunctionContext)
}

export const useModalContext =()=>{
	return useContext(ModalContext)
}

export const useModalFunctionContext =()=>{
	return useContext(ModalFunctionContext)
}


const Provider = ({children}) => {

	const [state,dispatch] = useReducer(reducer,{
			previousOperand: '',
			currentOperand: '',
			operator: '',
			answer: ''
	})
	
	const [modal,modalDispatch] = useReducer(setModal,false);

	

	
	
	return (
			<StateContext.Provider value={state}>
					<FunctionContext.Provider value={dispatch}>
						<ModalContext.Provider value = {modal}>
							<ModalFunctionContext.Provider value = {modalDispatch}>
								{children}
							</ModalFunctionContext.Provider>
						</ModalContext.Provider>
					</FunctionContext.Provider>
			</StateContext.Provider>
	)
}

export default Provider