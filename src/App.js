import React from 'react';
import FormBlock from './components/formBlock';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './index.css'
import CounterApp from './components/CounterApp';
import Home from './components/Home';
export default function App() {
  return (
    <Router>
    <div style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={FormBlock}/>
        <Route path='/counter' component={CounterApp}/>
        <Route path='/home' component={Home}/>
      </Switch>
      <p style={{textAlign:'center',marginTop:'auto',color:'white'}}> &copy;designed by MUKUND MADHAV GOYAL</p>
    </div>
    </Router>
  )
}
