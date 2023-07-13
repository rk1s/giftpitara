import React from "react";
import { FaRupeeSign,FaStar } from "react-icons/fa";

export default function CardComponent() {
    const posts = [
        {
            title: "Flowers",
            img: "https://www.dpsainiflorist.com/wp-content/uploads/2023/03/dp1967.jpg"
        },
        {
            title: "Cakes",
            img: "https://b.zmtcdn.com/data/reviews_photos/1bd/13b9df30b377519a497c9eaa22e1a1bd_1607434958.jpg"
        },
        {
            title: "Hampers",
            img: "https://cdn.shopify.com/s/files/1/1959/5979/products/IMG_9436_1_530x@2x.jpg?v=1630488779"
        },
        {
            title: "Plants",
            img: "https://media.karousell.com/media/photos/products/2021/4/1/aglaonema_silver_king_indoor_p_1617251468_09cbd6b6_progressive.jpg"
        },
        
    ];
    return (
        <>
        <div className=" mx-7 md:mx-10 lg:mx-20 py-7">
        <div>
            <h1 className=" text-3xl font-semibold ">Trending Gifts</h1>
            <h1 className=" text-sm font-normal mb-5 text-gray-500" >Handpicked for your gifting needs</h1>
        </div>
            <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-2xl lg:max-w-sm " key={key}>
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
        </>
    );
}