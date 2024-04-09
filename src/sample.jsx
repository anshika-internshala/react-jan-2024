import ReactDOM from 'react-dom/client';
//import React from 'react';

//  const header = React.createElement('h1', {id: "header", class:"abc"}, "Hello World using React!!");

//  console.log(header);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// JSX --- HTML like syntax 

const root = ReactDOM.createRoot(document.getElementById("root"));

const header1 = (
    <>
        <div>
            <h1>Hello World using React!! </h1>
        </div> 
        <div>
            <h1>Hello World using React!! </h1>
        </div> 
    </>
    
);

// Babel ---- converts JSX --- React Element ---- JS Object

root.render(header1);

