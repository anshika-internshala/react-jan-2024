import React from "react";

class OffersClass extends React.Component {

    constructor(props) {
        console.log("child constructor");
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("child component has been mounted");

        this.timer = setInterval(() => {
            console.log("class based component")
        }, 1000);
    }

    componentDidUpdate(prevValue , newValue) {
            console.log("child component has been updated");
    }

    componentWillUnmount() {
        console.log("child component has been unmounted");
        clearInterval(this.timer);
    }

    render() {
        console.log("child rendered");
        const {name , color} = this.props;
        const { count } = this.state;

        function updateCount() {
            console.log("update count called");
            this.setState({count: count + 1});
        }
    
        return (
            <>
                <div>Class Based Component</div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.color}</h2>
                <h2>{count}</h2>
                <button onClick={updateCount.bind(this) }>Update Count</button>
            </>
        )
    }
}

export default OffersClass;