import React from 'react'
import Typewriter from './Typewriter';

function Tools() {
  return (
    <div className='flex flex-col justify-center bg-slate-950'>
        <h1 className='text-5xl tracking-wider font-bold mb-6 pl-32'><Typewriter text='Tools' delay={100} /></h1>
        <div className='flex flex-row justify-evenly flex-wrap gap-6'>
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" />
          <i style={{fontSize:'80px',marginBottom:'3px'}} class="devicon-github-original"></i>
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" />
          <img width={'80px'} className='mb-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
        </div>
    </div>
  )
}

export default Tools