import { useState,useEffect } from "react";

export function useStatusStock({stockId}) {
    const [isAvailabel, setIsAvailabel] = useState(null);

    useEffect(() => {
        const stock = stockId % 2 === 0 ? true : false;
        setIsAvailabel(stock);
    },[stockId])
    return isAvailabel;
}