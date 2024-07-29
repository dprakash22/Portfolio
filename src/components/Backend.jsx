import React from 'react'
import Typewriter from './Typewriter';

function Backend() {
  return (
    <div className='flex flex-col justify-center bg-slate-950'>
    <h1 className='text-5xl tracking-wider font-bold mb-6 pl-32'><Typewriter text='Backend' delay={100} /></h1>
    <div className='flex flex-row justify-evenly flex-wrap gap-6'>
      <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
      <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
      <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
      <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
      <i style={{fontSize:'80px',marginBottom:'3px'}} class="devicon-express-original"></i>
      <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
      <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />

    </div>
</div>
  )
}

export default Backend