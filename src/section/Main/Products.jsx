import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const Products = (props) => {
    const {percentage ,pageCount} = props;


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

    return (
        <div className=" mt-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden relative"
                        >
                            <img
                                className="w-full h-48 object-cover select-none"
                                src={product.thumbnail}
                                alt=""
                                style={{
                                    transition: "transform 0.3s ease-in-out",
                                    transform: hoveredIndex === index ? "scale(1.2)" : "scale(1)",
                                }}
                            />
                            <div className="absolute bg-white h-8 w-8 top-3 right-2 rounded-full flex justify-center items-center">
                                {clickedHearts.includes(index) ? (
                                    <FaHeart
                                        className="text-xl font-medium text-red-600"
                                        onClick={() => handleClick(index)}
                                    />
                                ) : (
                                    <CiHeart
                                        className="font-light text-stone-700 text-2xl"
                                        onClick={() => handleClick(index)}
                                    />
                                )}
                            </div>
                            <div className="bg-white h-8 w-8 absolute top-12 right-2 flex justify-center items-center rounded-full">
                                <IoEyeOutline
                                    className=" font-medium  text-2xl"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                />
                            </div>
                            {percentage !== 1 && (
                                <div className="absolute top-3 left-2 w-10 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                                    <p className="text-white text-sm">
                                        -${100 - 100 * percentage}
                                    </p>
                                </div>
                            )}
                            <div className="p-4">
                                <p className="font-medium text-base mb-2">{product.title}</p>
                                <div className="flex gap-3">
                                    {percentage !== 1 ? (
                                        <>
                                            <p className="text-red-600">
                                                ${(product.price * percentage).toFixed(2)}
                                            </p>
                                            <p className="text-gray-500 line-through">
                                                ${product.price}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="text-red-600">${product.price}</p>
                                    )}
                                </div>
                            </div>
                            <div className="ml-4 mb-2 flex gap-2 items-center select-none">
                                <Rater total={5} rating={product.rating} interactive={false} />
                                <p className="text-gray-500 text-sm">({product.stock})</p>
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
