import React from 'react'
import '../stylesheets/form.css'
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <div style={{height:"7%",width:'100%',backgroundColor:'#9d4edd',color:'white'}}>
            <ul style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <li className='list'><Link to='/' className='lnk'>Form</Link></li>
                <li className='list'>
                    <ArrowBackSharpIcon/>  
                        Use These Buttons To Navigate Between Questions
                     <ArrowForwardSharpIcon/>
                </li>
                <li className='list'><Link to='/counter' className='lnk'>Counter App</Link></li>
            </ul>
        </div>
    )
}
