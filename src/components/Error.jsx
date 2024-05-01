import { useRouteError } from "react-router-dom";

function Error () {
    const err = useRouteError();

    console.log(err);

    const {data, status, statusText} = err;

    return (
        <>
            <h1>Oops!! Something Went Wrong!!</h1>
            <h2>{data}</h2>
            <h2>{`${status} ${statusText}`}</h2>
        </>
    )
}

export default Error;