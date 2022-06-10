import React, {useEffect,useRef,useState,useReducer} from 'react'
import { useStateContext, useModalContext, useModalFunctionContext} from '../Provider'




const History = () => {

  const state = useStateContext();
  const modal = useModalContext();
  const setModal = useModalFunctionContext();

  const previousOperandRef = useRef();
  const currentOperandRef = useRef();

  const [history,setHistory] = useState([]);

  const [pressed,setPressed] = useState(false);

  const [touched,setTouched] = useState(false);

  const positionRef = useRef({x:0,y:0});

  const draggableObj = useRef();


  useEffect(() => {

    if(!pressed) return;
    
    const draggingEvent = (e)=>{
      e.preventDefault();
      positionRef.current = {
        x: positionRef.current.x = positionRef.current.x + e.movementX,
        y: positionRef.current.y = positionRef.current.y + e.movementY,
      }

      draggableObj.current.style.transform = `translate(${positionRef.current.x}px,${positionRef.current.y}px)`;

    }
  
    draggableObj.current.addEventListener('mousemove',draggingEvent);;

  
    return ()=>{
      draggableObj.current.removeEventListener('mousemove',draggingEvent);

    }

  },[pressed])

  useEffect(() => {

    if(!touched) return;
    
    const draggingTouchEvent = (e)=>{
      e.preventDefault();


      positionRef.current = {
        x: positionRef.current.x =  e.touches[0].clientX - draggableObj.current.clientWidth/2,
        y: positionRef.current.y =  e.touches[0].clientY - draggableObj.current.clientHeight/2,
      }

      draggableObj.current.style.transform = `translate(${positionRef.current.x}px,${positionRef.current.y}px)`;

    }
  
    draggableObj.current.addEventListener('touchmove',draggingTouchEvent);;

  
    return ()=>{
      draggableObj.current.removeEventListener('touchmove',draggingTouchEvent);

    }

  },[touched])


  

  useEffect(() =>{
    const historyStorage = JSON.parse(localStorage.getItem('Computations'))
    
    
    if(historyStorage) setHistory(historyStorage);
  
  },[])

  useEffect(() =>{


    if(history.length >= 5){
      const newHistory = history.filter(item=>{
        return item.id >= history.length - 5
      })

      localStorage.setItem('Computations', JSON.stringify(newHistory))
    }

    else localStorage.setItem('Computations', JSON.stringify(history))
  },[history])



  useEffect(() => { 
    if((state.previousOperand !== "" && state.currentOperand !== '')){
      previousOperandRef.current = state.previousOperand;
      currentOperandRef.current = state.currentOperand;
    }

  },[state])


  useEffect(() => {
    if(state.answer !== ''){
      setHistory((prevHistory)=>{
        return [...prevHistory,{
          id: history.length,
          previousOperand: previousOperandRef.current,
          currentOperand: currentOperandRef.current,
          operator: state.operator,
          answer: state.answer
        }]
      })
    }

  },[state.answer])

 
  return (
      <div className="history" ref={draggableObj} onMouseDown = {()=>{
      return setPressed(true);
    }} onMouseUp = {()=>{
      return setPressed(false);
    }} 
    onMouseLeave = {()=>{
      return setPressed(false);
    }}

    onTouchStart = {(e)=>{
      console.log(e.touches[0].clientX)
      return setTouched(true);
    }} 
    onTouchEnd = {()=>{
      return setTouched(false);
    }}
    draggable = "true"
     style={Object.assign({},historyStyles,{
      display : modal === false ? 'none' : 'flex'
    })}>
      <button style={{
        backgroundColor:'transparent',
        fontSize: '1.5rem',
        alignSelf: 'flex-end'
      }} onClick={()=>{
        return setModal({type: 'close-modal'})
      }}><i className="fa fa-times"></i></button>
      <h3 style={{margin: '1rem 0'}}>Calculator History</h3>
      {history.filter(item=> item.id >= history.length - 5).map((item,index)=>{
        return <div style={{display: 'flex'}} key={index}>
          <p style={historyParagraphStyles}>{item.previousOperand}</p>
          <p style={historyParagraphStyles}>{item.currentOperand}</p>
          <p style={historyParagraphStyles}>=</p>
          <p style={historyParagraphStyles}>{item.answer}</p>
        </div>          
      })
      }

      
    </div>
  )
}

const historyStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: 'min(90%,400px)',
  margin: '0 auto',
  backgroundColor: '#FF00F3',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '4px'
}

const historyParagraphStyles = {
  fontSize: 'clamp(1rem,5vw,1.3rem)',
  margin: '.5rem 0'
}

export default History