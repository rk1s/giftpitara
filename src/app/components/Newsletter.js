import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className='mx-10 md:mx-20 bg-gray-200 rounded-lg my-7 '>
                <div className='grid grid-col-1   xl:grid-cols-2 mx-5 xl:mx-20 py-10 '>
                    <div className='border  border-r-0 border-t-0 border-l-0 border-b-0 xl:border-r-2 border-[#ff8f9c] px-5 xl:px-0'>
                        <h1 className='text-3xl font-extrabold border'>Newsletter Updates</h1>
                        <h1 className='text-gray-500 text-sm'>Get unique & trendy gift ideas and best offers delivered to your Inbox.</h1>
                    </div>


                    <div className=' px-5'>
                        <div className=" my-5">
                            <input className="shadow appearance-none border  py-2 px-3 w-[60%] text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12" id="username" type="text" placeholder="Enter Email-ID" />
                            <button className="bg-[#ff8f9c] hover:bg-[#212121] text-white font-bold mx-0 sm:mx-5 py-2 px-10 h-11 mt-4 sm:mt-0  focus:outline-none focus:shadow-outline" type="button">
                                Submit
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Newsletter