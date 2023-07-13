/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaRupeeSign,FaStar } from "react-icons/fa";

export default function CardComponent() {
    const posts = [
        {
            title: "Birthday Personalized Gift a Beautyfull Doll",
            img: "https://cdn.shopify.com/s/files/1/0245/2081/8751/products/IMG_9043_1800x1800.jpg?v=1636611987",
            content: "499",
            ratting:"4.7"
        },
        {
            title: "Birthday Sprinkles Personalized Magic Mug",
            img: "https://cdn.shopify.com/s/files/1/0485/8462/2232/products/il_fullxfull.897888386_g9sw.jpg?v=1600229931",
            content: "499",
            ratting:"4.7"
        },
        {
            title: "Birthday Sprinkles Personalized Magic Mug",
            img: "https://cdn.shopify.com/s/files/1/0485/8462/2232/products/il_fullxfull.897888386_g9sw.jpg?v=1600229931",
            content: "499",
            ratting:"4.7"
        },
        {
            title: "Birthday Sprinkles Personalized Magic Mug",
            img: "https://cdn.shopify.com/s/files/1/0485/8462/2232/products/il_fullxfull.897888386_g9sw.jpg?v=1600229931",
            content: "499",
            ratting:"4.7"
        },
    ];
    return (
        <>
        <div className=" mx-7 md:mx-10 lg:mx-20 py-7">
        <div>
            <h1 className=" text-3xl font-semibold ">New Arrival</h1>
            <h1 className=" text-sm font-normal mb-5 text-gray-500" >Most Recently Arrived Product</h1>
        </div>
        <Link href='/Filter'><div className="grid gap-4  md:grid-cols-2 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-xl lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-44 rounded-t-lg"
                            src={items.img}
                            alt="image"
                        />
                        <div className="px-4 py-1">
                            <h4 className="text-xl text-gray-500">
                                
                                {items.title}
                            </h4>
                            <div className="mb-2 font-medium flex items-center">
                            <FaRupeeSign size={15}/>{items.content}
                            </div>
                            <div className=" text-sm  flex items-center mb-3 ml-2">
                                {items.ratting}<FaStar  className="mx-1 text-yellow-600" />
                            </div>
                        </div>
                    </div>
                ))}
            </div></Link> 
            </div>
        </>
    );
}