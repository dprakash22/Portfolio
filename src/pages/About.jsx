import React from 'react'
import Photo from '../components/Photo.jsx';

function About() {
  return (
    <div className='flex flex-col lg:flex-row justify-around min-h-screen bg-slate-950'>

        <div className='flex flex-col justify-center p-1 mypic' style={{marginTop:"100px"}}>
            <Photo width='400px'/>
        </div>

        <div className='flex flex-col justify-center gap-3 p-8 lg:w-1/2 items-center pb-5'>
        <h1 className='text-4xl lg:text-6xl font-bold'>About Me</h1>
        <div className='flex flex-wrap text-base md:text-lg'>
        I am a full-stack developer with a deep passion for web development. 
        I enjoy building dynamic and user-friendly web applications from the ground up. 
        My expertise spans various programming languages, enabling me to create seamless and impactful solutions. 
        I thrive on solving complex problems and continuously seek to improve my skills. 
        Currently, I'm expanding my knowledge in the cloud domain to stay ahead in the tech world. 
        My curiosity and dedication drive me to keep learning and growing. I take pride in crafting applications that enhance user experiences and meet business needs. 
        Collaboration and innovation are at the core of my work ethic. I believe in the power of technology to transform ideas into reality. My goal is to leverage my skills to create meaningful and efficient web applications.
        </div>
        </div>
    </div>
  )
}

export default About;