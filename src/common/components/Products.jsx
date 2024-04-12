import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Rate } from 'antd';
import "react-rater/lib/react-rater.css";

const Products = (props) => {
    const { percentage, pageCount } = props;


    const [page, setPage] = useState(pageCount);
    const [products, setProducts] = useState([]);
    const [clickedHearts, setClickedHearts] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setProducts(response.data.products.splice(0, pageCount * 4));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [pageCount]);

    const handleClick = (index) => {
        if (clickedHearts.includes(index)) {
            setClickedHearts((prev) => prev.filter((item) => item !== index));
        } else {
            setClickedHearts((prev) => [...prev, index]);
        }
    };

    const handleChange = value => {
        console.log(value); // Değer değiştiğinde yapılacak işlemler
    };

    return (
        <div className="mt-7">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"> 
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden relative md:w-44 lg:w-60"
                        >
                            <img
                                className="w-full object-cover select-none md:h-36 lg:h-48"
                                src={product.thumbnail}
                                alt=""
                                style={{
                                    transition: "transform 0.3s ease-in-out",
                                    transform: hoveredIndex === index ? "scale(1.2)" : "scale(1)",
                                }}
                            />
                            <div className="absolute bg-white h-8 w-8 top-3 right-2 rounded-full flex justify-center items-center md:h-5 md:w-5">
                                {clickedHearts.includes(index) ? (
                                    <FaHeart
                                        className="font-medium text-red-600 md:text-sm lg:text-xl"
                                        onClick={() => handleClick(index)}
                                    />
                                ) : (
                                    <CiHeart
                                        className="font-light text-stone-700 md:text-sm lg:text-2xl"
                                        onClick={() => handleClick(index)}
                                    />
                                )}
                            </div>
                            <div className="bg-white h-8 w-8 absolute top-12 right-2 flex justify-center items-center rounded-full md:h-5 md:w-5 ">
                                <IoEyeOutline
                                    className=" font-medium  md:text-sm lg:text-2xl "
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                />
                            </div>
                            {percentage !== 1 && (
                                <div className="absolute top-3 left-2 w-10 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                                    <p className="text-white text-sm ">
                                        -${100 - 100 * percentage}
                                    </p>
                                </div>
                            )}
                            <div className="p-4">
                                <p className="font-medium mb-2 md:text-sm lg:text-base">{product.title}</p>
                                <div>
                                    {percentage !== 1 ? (
                                        <>
                                            <div className="flex gap-3">
                                                <p className="text-red-600 md:text-sm lg:text-base">
                                                    ${(product.price * percentage).toFixed(2)}
                                                </p>
                                                <p className="text-gray-500 line-through md:text-sm lg:text-base">
                                                    ${product.price}
                                                </p>
                                            </div>
                                            <div className="flex gap-2 items-center select-none">
                                                <Rate allowHalf readOnly defaultValue={product.rating} onChange={handleChange} className="md:text-sm lg:text-lg" />
                                                <p className="text-gray-500 md:text-xs lg:text-sm">({product.stock})</p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className=" mb-2 flex gap-2 items-center select-none w-52">
                                            <p className="text-red-600">${product.price}</p>
                                            <Rate allowHalf readOnly defaultValue={product.rating} onChange={handleChange} style={{ btnSize: "18px" }} />
                                            <p className="text-gray-500 text-sm">({product.stock})</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))
                ) : (
                    <h2 className="text-center">
                        <i>Loading Products...</i>
                    </h2>
                )}
            </div>
        </div>
    );
};

export default Products;
