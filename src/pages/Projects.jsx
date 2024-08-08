import React from 'react'

function Projects() {
  return (
    <div className='text-center pt-36 h-screen bg-slate-950 text-white'>
        <h1 className='mb-4 text-5xl tracking-wider font-bold text-blue-600'>Projects</h1>
        <div className="flex flex-wrap gap-4 my-8 justify-around bg-slate-950 text-white">
            <div className="border border-black rounded-3xl flex-col w-96 my-5 pb-3 gap-2">
                    <img className='rounded-t-2xl' width={"100%"} src="src/assets/images/atn.png" alt="pic"></img>
                    <div className="mt-4">
                        <div className="mt-4 pl-3 pr-3 text-center">
                            <h1 className='mb-2 text-4xl font-bold'>Any Time Network</h1>
                            <p className='text-left'>Developed a device called ATN using LoRa technology, enabling people affected by floods to share messages without network connectivity. Created a dynamic website to manage and display all details and requests through an interactive dashboard. This project showcases skills in IoT, web development, and emergency communication solutions.
                            </p>
                        </div>
                        <div className="mt-3 flex justify-around">
                            <div className='rounded-3xl p-2 bg-blue-700'><p className='font-semibold'>Reactjs</p></div>
                            <div className='rounded-3xl p-2 bg-teal-600'><p className='font-semibold'>Nodejs</p></div>
                            <div className='rounded-3xl p-2 bg-slate-500'><p className='font-semibold'>expressjs</p></div>
                            <div className='rounded-3xl p-2 bg-lime-700'><p className='font-semibold'>MongoDB</p></div>

                        </div>
                    </div>
            </div>

            <div className="border border-black rounded-3xl flex-col w-96 my-5 pb-3 gap-2">
                    <img className='rounded-t-2xl' width={"100%"} src="src/assets/images/taskify.png" alt="pic"></img>
                    <div className="mt-4">
                        <div className="mt-4 pl-3 pr-3 text-center">
                            <h1 className='mb-2 text-4xl font-bold'>Taskify Manager</h1>
                            <p className='text-left'>
                                A dynamic online task assigning, notice board and resource sharing website with responsive design, prioritizing user
                                engagement. In this project frontend was done by React JS and backend was done Node JS, Express JS, Mongo DB.
                                In this project, I gain more knowledge about Middleware. This project helps to share the resources and assign tasks to others. 
                            </p>
                        </div>
                        <div className="mt-3 flex justify-around">
                            <div className='rounded-3xl p-2 bg-blue-700'><p className='font-semibold'>Reactjs</p></div>
                            <div className='rounded-3xl p-2 bg-teal-600'><p className='font-semibold'>Nodejs</p></div>
                            <div className='rounded-3xl p-2 bg-slate-500'><p className='font-semibold'>expressjs</p></div>
                            <div className='rounded-3xl p-2 bg-lime-700'><p className='font-semibold'>MongoDB</p></div>

                        </div>
                    </div>
            </div>

            <div className="border border-black rounded-3xl flex-col w-96 my-5 pb-3 gap-2">
                    <img className='rounded-t-3xl' width={"100%"} src="src/assets/images/shopkart.png" alt="pic"></img>
                    <div className="mt-4">
                        <div className="mt-4 pl-3 pr-3 text-center">
                            <h1 className='mb-2 text-4xl font-bold'>Shopkart</h1>
                            <p className='text-left'>ShopKart is a dynamic e-commerce platform designed to streamline online shopping. It offers a wide variety of products across multiple categories, ensuring a seamless shopping experience With robust backend support, it handles high traffic with ease.
                                 ShopKart aims to be the go-to destination for all your shopping needs, combining convenience, variety, and excellent customer service.
                            </p>
                        </div>
                        <div className="mt-3 flex justify-around">
                            <div className='rounded-3xl p-2 bg-blue-700'><p className='font-semibold'>Django</p></div>
                            <div className='rounded-3xl p-2 bg-teal-600'><p className='font-semibold'>Javascript</p></div>
                            <div className='rounded-3xl p-2 bg-slate-500'><p className='font-semibold'>Bootstrap</p></div>

                        </div>
                    </div>
            </div>

            <div className="border border-black rounded-3xl flex-col w-96 my-5 pb-3">
                    <img className='rounded-t-3xl' width={"100%"} src="src/assets/images/expense.png" alt="pic"></img>
                    <div className="mt-4">
                        <div className="mt-4 pl-3 pr-3 text-center">
                            <h1 className='mb-2 text-4xl font-bold'>Expense Tracker</h1>
                            <p className='text-left'>An Expense Tracker application developed using React.js for the front-end, and MongoDB as the database
                                enables users to record, categorize, track, and analyze their expenses efficiently within a web-based interface,
                                leveraging the capabilities of these technologies for seamless data management and real-time updates.
                            </p>
                        </div>
                        <div className="mt-2 flex justify-around">
                            <div className='rounded-3xl p-2 bg-blue-700'><p className='font-semibold'>Reactjs</p></div>
                            <div className='rounded-3xl p-2 bg-teal-600'><p className='font-semibold'>Nodejs</p></div>
                            <div className='rounded-3xl p-2 bg-slate-500'><p className='font-semibold'>expressjs</p></div>
                            <div className='rounded-3xl p-2 bg-lime-700'><p className='font-semibold'>MongoDB</p></div>

                        </div>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Projects