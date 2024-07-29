import React, { useEffect } from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import '../assets/cssfiles/name.css'
import Typewriter from './Typewriter';
import Photo from './Photo';
import {useNavigate} from 'react-router-dom'

function Name() {
  const nav=useNavigate();

  useEffect(()=>{
    const tim=setTimeout(()=>{
      nav('/home');
    },5000);

    return ()=>clearTimeout(tim);
  },[]);
  

  return (
    <div className='fpname'>
        <Photo width='250px'/>
        <h1>Deepak Prakash</h1>
        <h2>
          <Typewriter text="Full-Stack Developer" delay={100} />
        </h2>
    </div>
  );
}

export default Name;
