import React from 'react'
import JSONDATA from "./MOCK_DATA.json"
import { useState } from 'react';

function Search() {
    
    const[input,setinput]=useState("")
    const [state, setstate] = useState(JSONDATA)
    
const handeler=(e)=>{
    const up=state.filter(data=>data.id!=e);
    setstate(up) ;
}



  return (
<>
<div className='bg-blue-600 flex flex-col justify-center content-center p-10  '>
    
    <div className='bg-cyan-50 flex flex-col m-auto content-center'>
       
    <input placeholder='Type' onChange={(e)=>setinput(e.target.value)} className="w-16 h-6"></input>

        {state.filter((val)=>{
        if(input==" "){
            return val
        }
        else if(val.first_name.toLowerCase().includes(input.toLowerCase())){
            return val
        }
    }).map((val)=>
    
       { return (<div>{val.first_name}
       <button className='bg-blue-200 hover:bg-violet-600 active:bg-violet-700 ' onClick={()=>handeler(val.id)} >del</button>
       
       </div>)
        }
    )
    }
        
    </div>
    </div>
    </>
  );
}

export default Search