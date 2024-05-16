import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/restaurants.routes.js";
import { userRoutes } from "./Routes/user.routes.js";

const app = express();

// Built in middleware
app.use(express.json());

app.listen("5100", () => {
    console.log("server is running on port 5100");
});

routes(app);
userRoutes(app);

mongoose.connect("mongodb+srv://internshala:internshala@cluster0.1xgg1mv.mongodb.net/");

const db = mongoose.connection;

db.on("open", () => {
    console.log("connection is successful");
});

db.on("error", ()=> {
    console.log("connection is not successful");
})

// http methods ---- GET , POST, PUT, DELETE

const users = [
    {
        id: 1,
        name: "John",
        age: 23
    },
    {
        id: 2,
        name: "Kiya",
        age: "56"
    },
    {
        id: 3,
        name: "Ria",
        age: "24"
    },
    {
        id: 4,
        name: "Ankit",
        age: "34"
    }
];


function logRequest(req, res, next) {
    console.log("user has initiated some request");
    next();
}

app.get("/", logRequest,  (req, res) => {
    res.send("learning nodejs");
})

// Fetch all users
app.get("/users", (req, res) => {
    res.send(users);
})

app.post("/user", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const user = {
        id: Math.random() * 25,
        name: name,
        age: age
    }

    users.push(user);

    res.send(users);
})

// Update a user by id

app.put("/user/:id", (req, res) => {
    const id = req.params.id;

    const user = users.find(user => user.id == id);

    if (!user) {
        res.status(404).json({message: "user not found"});
    }

    const keys = Object.keys(req.body);

    keys.forEach(key => {
        if(!user[key]) {
            res.status(404).json({message: "Invalid key"});
        }

        user[key] = req.body[key];
    })

    res.json(users);
})

// delete user

app.delete("/user/:id", (req, res) => {
    const id = req.params.id;

    const user = users.find(user => user.id == id);

    if(!user) {
        res.status(404).json({message: "user does not exist"});
    }

    const index = users.findIndex(user => user.id == id);

    users.splice(index , 1);

    res.json(users);
})

