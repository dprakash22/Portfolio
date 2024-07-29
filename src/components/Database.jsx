import React from 'react'
import Typewriter from './Typewriter';

function Database() {
  return (
    <div className='flex flex-col justify-center bg-slate-950'>
        <h1 className='text-5xl tracking-wider font-bold mb-6 pl-32'><Typewriter text='Database' delay={100} /></h1>
        <div className='flex flex-row justify-evenly flex-wrap gap-6'>
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
        </div>
    </div>
  )
}

export default Database