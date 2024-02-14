import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './components/States';

import './App.css';

import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Main from './components/conditional/Main';
import Keys from './components/keys/Keys';
import Products from './components/products/Products';
import Effects from './components/Effects/Effects'
import MainRouter from './components/ReactRouter/MainRouter';
import State from './components/State';
import Colorchange from './components/Colorchange';
import Useeffect from './components/Useeffect'
import ReactToggle from './components/ReactToggle';

function App() {
  // const [post, setpost] = useState([])
  // useEffect(()=>{

  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(post => setpost(post.splice(0,10)))


  // },[])

 
                  
  return (
    <div className="App">
       {/* <Products/>  */}
     {/* <State/>  */}
     {/* <Colorchange/> */}
     {/* <Useeffect/> */}
     <ReactToggle/>
    </div>
  );
}

export default App;
