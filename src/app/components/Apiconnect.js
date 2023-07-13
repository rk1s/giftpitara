import React from 'react'

const apiconnect = () => {
    return (
        <>

            <div className=' p-4'>


                <form>
                    <div className=" text-black font-bold text-sm sm:text-sm md:text-2xl font-serif uppercase text-center sm:text-start">
                        Login in to complete your order
                    </div>



                    <p onClick={singup} className=" cursor-pointer mb-3 mt-4 text-center text-base font-semibold">Don't have an account?<span className=' text-red-600 ml-1 hover:underline'>

                        Sign Up

                    </span></p>


                    <div className="  grid grid-cols-1 md:grid-cols-1 ">
                        <label>
                            Username <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            className="border  shadow-lg p-2 outline-[#ff8f9c] "
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-1 py-2 mt-1">
                        <label>
                            Password <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="password"
                            className=" border shadow-lg p-2 rounded outline-[#ff8f9c]"
                            placeholder="Enter your password"
                        />
                    </div>


                    {/* <!-- Forgot password link --> */}


                    <h1 onClick={pass} className=' cursor-pointer text-right font-normal text-red-500 hover:underline'>Forgot Password ?</h1>



                    <div className=" text-center  grid grid-cols-1 md:grid-cols-1 items-center py-3 my-3 px-7 pb-2.5 pt-3 text-sm font-medium  text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-[#ff8f9c]  hover:bg-[#212121]">
                        <button type="submit">Login</button>
                    </div>




                </form>
            </div>



        </>
    )
}

export default apiconnect;