import React from 'react'


export default function CelebrateMilestone() {
        const birthday = [
            {
                title: "Gift",
                img: "https://assets.winni.in/product/primary/2023/4/84386.jpeg?dpr=1&w=400"
            },
            {
                title: "Gift",
                img: "https://assets.winni.in/product/primary/2023/4/84386.jpeg?dpr=1&w=400"
            },
            {
                title: "Gift",
                img: "https://assets.winni.in/product/primary/2023/4/84386.jpeg?dpr=1&w=400"
            },
            {
                title: "Gift",
                img: "https://assets.winni.in/product/primary/2023/4/84386.jpeg?dpr=1&w=400"
            },

 
            
        ];
        const aniversary = [
            {
                title: "Flowers",
                img: "https://yourkoseli.com/wp-content/uploads/2021/09/Mixed-2.jpg"
            },
            {
                title: "Flowers",
                img: "https://yourkoseli.com/wp-content/uploads/2021/09/Mixed-2.jpg"
            },
            {
                title: "Flowers",
                img: "https://yourkoseli.com/wp-content/uploads/2021/09/Mixed-2.jpg"
            },
            {
                title: "Flowers",
                img: "https://yourkoseli.com/wp-content/uploads/2021/09/Mixed-2.jpg"
            },
        ];




  return (
   <>
    <div className=" mx-7 md:mx-10 lg:mx-20 py-7">
        <div>
            <h1 className=" text-3xl font-semibold ">Celebrate Milestones</h1>
            <h1 className=" text-sm font-normal mb-2" >With our memorable gifts</h1>
        </div>
    <div className='grid md:grid-cols-1  lg:grid-cols-2 gap-10'>
    <div className=' '>
                <h1 className=' text-lg font-medium underline'>BIRTHDAY GIFTS</h1>
            <h1 className=' text-sm text-gray-500 cursor-pointer'>View all</h1>
            <div className=' grid grid-cols-2 gap-2'>
             {birthday.map((items, key) => (
                    <div className="w-full rounded-lg shadow-2xl lg:max-w-sm py-2" key={key}>
                        <img
                            className="object-cover w-full h-48 rounded-lg "
                            src={items.img}
                            alt="image"
                        />
                        <div className=" text-center -mt-10 text-2xl text-white font-bold">{items.title}
                        </div>
                        
                    </div>
                ))}
                </div>
           
    </div>

    <div className=' '>
                <h1 className=' text-lg font-medium underline'>ANNIVERSARY GIFTS</h1>
            <h1 className=' text-sm text-gray-500 cursor-pointer'>View all</h1>
            <div className=' grid grid-cols-2 gap-2'>
             {aniversary.map((items, key) => (
                    <div className="w-full rounded-lg shadow-2xl lg:max-w-sm py-2" key={key}>
                        <img
                            className="object-cover w-full h-48 rounded-lg "
                            src={items.img}
                            alt="image"
                        />
                        <div className=" text-center -mt-10 text-2xl text-white font-bold">{items.title}
                        </div>
                        
                    </div>
                ))}
                </div>
           
    </div>

        </div>
        </div>

    

   </>
  )
}
