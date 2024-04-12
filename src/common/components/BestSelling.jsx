import Button from "./Button";
import Products from "./Products";
import { useState } from "react";
import Title from "./Title";

const BestSelling = () => {
    const [dataCount,setDataCount] = useState(1)
    const increaseData = () => {
        setDataCount(dataCount + 1)
    }
    return (
        <div className=' sm:mt-12 md:mt-24 lg:mt-32 pb-32'>
                <div className="flex justify-between items-end">
                <Title sectionTitle="This Month" sectionInfo="Best Selling Products"/>
                <Button btnTitle="View All" color="#DC2626" btnFunk={increaseData}/>
                </div>
            <Products percentage={0.9} pageCount={dataCount} />
        </div>
    );
};

export default BestSelling;
