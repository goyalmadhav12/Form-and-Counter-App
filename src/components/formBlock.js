import React,{useState} from 'react'
import'../stylesheets/form.css';
import avatar from '../assets/avatar1.png'
import { useHistory } from "react-router-dom";
export default function FormBlock() {
    const history = useHistory();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const nameSetter=(event)=>{
      setName(event.target.value);
    }
    const emailSetter=(event)=>{
      setEmail(event.target.value);
    }
    const passwordSetter=(event)=>{
      setPassword(event.target.value);
    }
    const phoneSetter=(event)=>{
      setPhone(event.target.value);
    }
    const data={ name: "rohit",
    email: "rroo@gmail.com",
    password: "1234567890",
    phone: "9876543210"
    }
    const validator=()=>{
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      let flag=0;
      if(name.length==0||email.length==0||password.length==0||phone.length==0)
      {
        flag=1;
        alert('Empty Field');
      }
      else{
        if(name.length<3)
        {
          flag=1;
          alert('Name should be atleast 3 characters long');
        }
        else if(password.length<8)
        {
          flag=1;
          alert('Password should be atleast 8 characters long');
        }
        else if (!filter.test(email)) {
          flag=1;
          alert('Enter valid email.');
        }
        else if(isNaN(phone))
        {
          flag=1;
          alert('Enter numeric value in phone number');
        }
        else if(phone.length!=10)
        {
          flag=1;
          alert('Phone number should be 10 characters long')
        }
       }
       if(flag==0)
       {
          if(name==data.name && email==data.email && password==data.password && phone==data.phone)
          {
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
            history.push('/home');
          }
          else{
            alert('Data not matched with static data');
          }
       }
    }
    const resetter=()=>{
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
    }
    return (
        <div id='main'>
           <img src={avatar}  style={{width:'100%',marginBottom:20}}/>
           <input type='text' className='inpt' placeholder='YOUR NAME' value={name} onChange={nameSetter}/>
           <input type='email' className='inpt' placeholder='EMAIL' value={email} onChange={emailSetter}/>
           <input type='password' className='inpt' placeholder='PASSWORD' value={password} onChange={passwordSetter}/>
           <input type='tel' className='inpt' placeholder='PHONE' value={phone} onChange={phoneSetter}/>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
            <button className='btn' id='btn1' onClick={resetter}>RESET</button>
            <button className='btn' id='btn2' onClick={validator}>REGISTER</button>
          </div>
        </div>
    )
}
