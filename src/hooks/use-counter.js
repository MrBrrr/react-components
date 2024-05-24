import { useState, useEffect } from "react";


export function useCounter({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log("Count changed to:", count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return {
        count,
        increment,
    };
}
