import Button from "./Button";
import Products from "./Products";
import { useState } from "react";

const BestSelling = () => {
    const [dataCount,setDataCount] = useState(1)
    const increaseData = () => {
        setDataCount(dataCount + 1)
    }
    return (
        <div className=' sm:mt-12 md:mt-24 lg:mt-32 pb-32'>
            <div className='flex gap-4 mb-6 items-center'>
                <div className='w-5 h-8 bg-red-600 rounded-sm'></div>
                <h3 className='text-2xl text-red-600 font-semibold'>This Month </h3>
            </div>
            <div className="flex items-center justify-between mb-12">
                <p className='text-4xl font-bold'>Best Selling Products</p>
                <Button buttonTitle="View All" color="#DC2626" increaseData={increaseData}/>
            </div>
            <Products percentage={0.9} pageCount={dataCount} />
        </div>
    );
};

export default BestSelling;
