import Offers from "./Offers";
import OffersClass from "./OffersClass";
import React from "react";

// function About() {
//     return (
//         <>
//             <h1>About Component</h1>
//             <Offers name="Anshika Agarwal" color="red"/>
//             <h1>Class Based Component</h1>
//             <OffersClass name="Anshika" color="blue"/>
//         </>
//     )
// }

// export default About;

class About extends React.Component {
    constructor() {
        console.log("Parent constructor called");
        super();
    }

    componentDidMount() {
        console.log("Parent Component Mounted");
    }

    componentDidUpdate() {
        console.log("Parent component updated");
    }

    componentWillUnmount() {
        console.log("parent component unmounted");
    }

    render() {
        console.log("parent constructor rendered");
        return (
            <>
                <h1>About Component</h1>
                <Offers name="Anshika Agarwal" color="red"/>
                <h1>Class Based Component</h1>
                <OffersClass name="Anshika" color="blue"/>
            </>
        )
    }
}

export default About;