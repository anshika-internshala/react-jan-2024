import { useEffect, useState } from "react";

function Offers(props) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("component has been rendered");

        return(() => {
            console.log("functional component unmounted");
        })
    }, [count]);

    function updateCount() {
        setCount(count+1);
    }

    return (
        <>
            <h1>Offer Component</h1>
            <h2>{props.name}</h2>
            <h2>{count}</h2>
            <button onClick={updateCount}>Update Count</button>
        </>
    )

}

export default Offers;