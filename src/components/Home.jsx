import React from 'react'
import '../assets/cssfiles/home.css'
import Typewriter from './Typewriter';
import Photo from './Photo';
import { SocialIcon } from 'react-social-icons'


function Home() {

    return (
    <div className='flex flex-col-reverse md:flex-row justify-around h-screen pb-10'>

        <div className='flex flex-col justify-center gap-3 w-full md:w-10/12 md:pl-4 lg:w-1/2 pl-0 items-center md:items-start'>
            <h1 className='text-3xl md:text-4xl tracking-wider'>Hello, I'm</h1>
            <h1 className='text-4xl md:text-6xl tracking-wider font-bold'>Deepak Prakash</h1>
            <h1 className='text-2xl md:text-3xl tracking-wider mb-4'> <Typewriter text='Full-Stack Developer' delay={100} /> </h1>
            <p className='w-9/12 text-justify'>As a fullstack developer with a deep passion for web development, I thrive on creating innovative and dynamic web experiences. My expertise spans across both front-end and back-end technologies, allowing me to build seamless and impactful solutions.</p>
            <div className='flex flex-row gap-4 mt-3'>
            <SocialIcon network="github" bgColor='rgb(0, 107, 177)' url="https://github.com/dprakash22" />
            <SocialIcon network="linkedin" bgColor='rgb(0, 107, 177)' url="https://www.linkedin.com/in/deepak-prakash-s-158184271/" />
            <SocialIcon network="leetcode" bgColor='rgb(0, 107, 177)' url="https://leetcode.com/u/d_prakash_s22/" />
            </div>
            <button type="button" className="bg-sky-700 p-2 rounded-2xl w-44 mt-3 mybtn"><a href="https://drive.google.com/file/d/1m9g4itmU_q2xvgtJSE8wmaBhyykuaUa2/view?usp=sharing"><h5>Resume</h5></a></button>
        </div>

        <div className='flex flex-col justify-center mypic'>
            <Photo width='400px'/>
        </div>

    </div>
  )
}

export default Home