import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Functional from './Functional';
import App from './App';
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

const value = true;

const names = 'Himanshi'

const arr1 =['array1','array2','array3','array4']

root.render(
  <>
 
 <ul>
    {arr1.map((val)=>{
      return <li> <h1> {val} </h1> </li>
    })}
 </ul>

  { value? <App/> : <Navbar name='Happy'/> }
    {names}
    
    <h1> our first react App</h1>
  </>

);
