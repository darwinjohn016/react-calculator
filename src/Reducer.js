export const ACTIONS = {
  ADD_NUMBER: 'add_number',
  CHOOSE_OPERATION: 'choose_operation',
  DO_OPERATION: 'do_operation',
  CLEAR: 'clear',
  DELETE: 'delete'
}

export const reducer = (state,{type,payload})=>{
	switch(type){
		case ACTIONS.ADD_NUMBER:

			if(payload.number === "." && !state.currentOperand.includes('.')){
				return{
					...state,
					currentOperand: state.currentOperand + payload.number
				}
			}

			if(payload.number === "." && state.currentOperand.includes('.')){
				return{
					...state,
					currentOperand: state.currentOperand.slice(0,state.currentOperand.length-1)
				}
			}

			if(payload.number === "+/-" && !state.currentOperand.includes('-')){
				return{
					...state,
					currentOperand: '-' + state.currentOperand
				}
			}

			if(payload.number === "+/-" && state.currentOperand.includes('-')){
				return{
					...state,
					currentOperand: state.currentOperand.slice(1,state.currentOperand.length)
				}
			}


			return {
				...state,
				currentOperand: state.currentOperand += payload.number
			}

		case ACTIONS.CHOOSE_OPERATION:

			if(state.previousOperand !== '' && state.currentOperand === '') return {
				...state,
				operator: state.operator = payload.operator,
				previousOperand: state.previousOperand.slice(0,state.previousOperand.length-1) + payload.operator
			}

			if(state.previousOperand === '' && state.currentOperand === '') return state;


			if(state.previousOperand !== '' && state.currentOperand !== '') return {
				...state,
				previousOperand: state.previousOperand = operation(state) + payload.operator,
				operator: state.operator = payload.operator,
				currentOperand: '',
        answer : state.previousOperand
			}



			return{
				...state,
				operator: state.operator = payload.operator,
				previousOperand: state.currentOperand + payload.operator,
				currentOperand: ''
			}

		case ACTIONS.DO_OPERATION:

			if(state.operator === '') return state;

			return{
				...state,
				currentOperand: state.currentOperand = isNaN(operation(state)) ? state.currentOperand = '': operation(state),
				previousOperand: '',
        answer : state.currentOperand
      }
		case ACTIONS.CLEAR:
			return {
				previousOperand: '',
        currentOperand: '',
        operator: ''
			}
		case ACTIONS.DELETE:
			return {
				...state,
				currentOperand: state.currentOperand.substr(0, state.currentOperand.length-1)
			}
		default:
				return state
	}
}

export const operation = (state)=>{
	switch(state.operator){
		case '+':
			return (parseFloat(state.previousOperand) + parseFloat(state.currentOperand)).toString();
		case '-':
			return (parseFloat(state.previousOperand) - parseFloat(state.currentOperand)).toString();
		case '*':
			return (parseFloat(state.previousOperand) * parseFloat(state.currentOperand)).toString();
		case '/':
			return (parseFloat(state.previousOperand) / parseFloat(state.currentOperand)).toString();
		case '%':
			return (parseFloat(state.previousOperand) / 100).toString();
		default :
			return state
	}
}

export const setModal = (modal,{type}) =>{
	switch(type){
		case 'open-modal':
			return true
		case 'close-modal':
			return false
	}
}