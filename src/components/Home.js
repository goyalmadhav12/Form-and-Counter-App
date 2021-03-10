import React from 'react'
import { useHistory} from 'react-router-dom'
export default function Home() {
    const history=useHistory();
    const handler=()=>{
        history.push('/');
    }
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
           <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <h1 style={{color:'white',fontSize:50}}>Hello World</h1>
            <button className='btn' id='btn3' onClick={handler}>Go back</button>
           </div>
        </div>
    )
}
