import React from 'react'
import Typewriter from './Typewriter';

function Frontend() {
  return (
    <div className='flex flex-col justify-center bg-slate-950'>
        <h1 className='text-5xl tracking-wider font-bold mb-6 pl-32'><Typewriter text='Frontend' delay={100} /></h1>
        <div className='flex flex-row justify-evenly flex-wrap gap-6'>
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />

        </div>
    </div>
  )
}

export default Frontend