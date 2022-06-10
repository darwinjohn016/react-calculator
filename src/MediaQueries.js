import React,{useState,useEffect} from 'react'

export const useMediaQueries = (query) => {

  const [state,setState] = useState(false);



  useEffect(() =>{

    const media = window.matchMedia(query);

    console.log(media);

    if(media.matches !== state){
      setState(media.matches)
    }

    const adjustSize = ()=>{
      return setState(media.matches)
    }


    media.addEventListener('change',adjustSize);

    return ()=>{
      media.removeEventListener('change',adjustSize);
    }

    
  },[state])

  return state

}
