import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Rate } from 'antd';
import "react-rater/lib/react-rater.css";

const ProductInfo = () => {
    const userID = JSON.parse(localStorage.getItem('user')).id;
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const productColorsData = [
        {
            id: 1,
            name: "Black",
            color: "black"
        },
        {
            id: 2,
            name: "Green",
            color: "green"
        },
        {
            id: 3,
            name: "Red",
            color: "red"
        },
        {
            id: 4,
            name: "Blue",
            color: "blue"
        }
    ];

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
    console.log(userID)
    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className='container w-[90%] m-auto mt-10'>
            {product ? (
                <div className='flex justify-between h-[600px] gap-7'>
                    <div className='flex flex-col gap-7'>
                        {product.images.slice(0, 4).map((image, index) => (
                            <div key={index} className='w-40 h-32 object-center object-cover'>
                                <img src={image} className='w-full h-32' alt={`Product ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className=' bg-slate-300'>
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
                        <p className='mt-6 text-sm border-b border-gray-300 pb-6'>{product.description}</p>
                        <div className='flex gap-6 mt-6'>
                            <p className='text-xl'>Colors:</p>
                            <div className="flex gap-3">
                                {productColorsData.map((color) => (
                                    <div
                                        key={color.id}
                                        className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === color.color ? 'border-[3px] border-gray-500' : ''}`}
                                        style={{ backgroundColor: color.color }}
                                        onClick={() => handleColorSelect(color.color)}
                                    ></div>
                                ))}
                            </div>
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
