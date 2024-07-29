import React, { useState } from 'react'
import Frontend from '../components/Frontend';
import Backend from '../components/Backend';
import Tools from '../components/Tools';
import Database from '../components/Database';
import 'boxicons'

function Skills() {
    const [ActiveComponent,setActiveComponent]=useState("Frontend");

    const rendercomponent=()=>{
        switch(ActiveComponent){
            // case 'ProgrammingLanguages':
            //     return <ProgrammingLanguages />;
            case 'Frontend':
                return <Frontend />;
            case 'Backend':
                return <Backend />;
            case 'Database':
                return <Database />;
            case 'Tools':
                return <Tools />;
            default:
                return <Frontend />;
        }
    };

    const getButtonClass=(component)=>{
        return `border-blue-900 p-3 rounded-2xl w-64 text-center mt-3 cursor-pointer ${ActiveComponent===component ? 'bg-blue-900' : 'bg-sky-600'}`;
    };


  return (
    <>
    <div className='h-screen bg-slate-950'>
        <div className='pt-28 mb-4'>
            <h1 className='flex flex-row justify-center  text-6xl tracking-wider font-medium'>Skills</h1>
        </div>

        <div className='flex flex-row justify-around mt-20 bg-slate-950'>
            <div className="flex flex-col justify-center gap-3">
                <div
                    className={getButtonClass('Frontend')}
                    onClick={() => setActiveComponent('Frontend')}
                >
                    Frontend
                </div>
                <div
                    className={getButtonClass('Backend')}
                    onClick={() => setActiveComponent('Backend')}
                >
                    Backend
                </div>
                <div
                    className={getButtonClass('Database')}
                    onClick={() => setActiveComponent('Database')}
                >
                    Database
                </div>
                <div
                    className={getButtonClass('Tools')}
                    onClick={() => setActiveComponent('Tools')}
                >
                    Tools
                </div>
            </div>

            <div className='w-1/4'>
                {rendercomponent()}
            </div>

        </div>
    </div>

    </>
    
  )
}

export default Skills;