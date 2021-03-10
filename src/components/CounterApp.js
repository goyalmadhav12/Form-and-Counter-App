import React , { useState } from 'react'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
export default function CounterApp() {
    const [count,setCount]=useState(0);
    const [colour,setColour]=useState('red');
    const increment=()=>{
        setCount(count+1);
        if(count>=5)
        {
            setColour('green');
        }
        console.log(count);
    }
    const decrement=()=>{
        setCount(count-1);
        if(count<=6)
        {
            setColour('red');
        }
        console.log(count);
    }
    return (
        <div style={{height:'100%',width:'100%',display:'flex'}}>
            <div style={{height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <RemoveSharpIcon fontSize='large' style={{color:'white',marginRight:20,cursor:'pointer'}} onClick={decrement}/>
            <p style={{backgroundColor:'white',
            borderRadius:20,
            textAlign:'center',
            alignSelf:'center',
            padding:30,
            fontSize:30,
            color:colour,
            fontWeight:'bold',
            minWidth:30}}>{count}</p>
            <AddSharpIcon fontSize='large' style={{color:'white',marginLeft:20,cursor:'pointer'}} onClick={increment}/>
            </div>
        </div>
    )
}
