import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Rate } from 'antd';
import "react-rater/lib/react-rater.css";

const ProductInfo = () => {
    const userID = JSON.parse(localStorage.getItem('user')).id;
    console.log(userID);

    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState('red');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${userID}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (userID) {
            fetchProduct();
        }
    }, [userID]);

    return (
        <div className='container w-[90%] m-auto mt-10'>
            {product ? (
                <div className='flex justify-between h-[600px] gap-7'>
                    <div className='flex flex-col gap-7'>
                        <div>
                            {product.images[0] ? (<div className='w-40 h-32 object-center object-cover'> <img src={product.images[0]} className='w-full h-32' alt="" /></div>) : (<div></div>)}
                        </div>
                        <div>
                            {product.images[1] ? (<div className='w-40 h-32 object-center object-cover'> <img src={product.images[1]} className='w-full h-32' alt="" /></div>) : (<div className='w-40 h-32 object-center object-cover'> <img src={product.images[0]} className='w-full h-32' alt="" /></div>)}
                        </div>
                        <div>
                            {product.images[2] ? (<div className='w-40 h-32 object-center object-cover'> <img src={product.images[2]} className='w-full h-32' alt="" /></div>) : (<div className='w-40 h-32 object-center object-cover'> <img src={product.images[0]} className='w-full h-32' alt="" /></div>)}
                        </div>
                        <div>
                            {product.images[3] ? (<div className='w-40 h-32 object-center object-cover'> <img src={product.images[3]} className='w-full h-32' alt="" /></div>) : (<div className='w-40 h-32 object-center object-cover'> <img src={product.images[0]} className='w-full h-32' alt="" /></div>)}
                        </div>
                    </div>
                    <div className='w- bg-slate-300'>
                        <img src={product.images[0]} className='w-full h-[600px]' alt="" />
                    </div>
                    <div className='ml-10 w-1/4'>
                        <h2 className='text-2xl font-semibold'>{product.title}</h2>
                        <div className='flex gap-2 my-4'>
                            <Rate allowHalf readOnly defaultValue={product.rating} className="md:text-sm lg:text-base" />
                            <p className="text-gray-500 md:text-xs lg:text-sm">({product.stock})</p>
                        </div>
                        <p className="text-2xl">
                            ${product.price}
                        </p>
                        <p className='mt-6 text-sm'>{product.description}</p>
                        <div className='w-full h-[1px] bg-gray-300 my-6'></div>
                        <div className='flex gap-6 '>
                            <p className='text-xl'>Colors:</p>

                        </div>
                    </div>
                </div>
            ) : (
                <p className='container w-[90%] m-auto'>Loading...</p>
            )}
        </div >
    );
};

export default ProductInfo;
