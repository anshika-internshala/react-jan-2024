import userModel from  "../model/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function register(req, res) {
    const { fullName, email , password} = req.body;

    const newuser = new userModel({
        fullName, 
        email, 
        password: bcrypt.hashSync(password, 10),
    });

    userModel.findOne({email}).then(data => {
        if(data) {
            return res.status(400).send({message: "user already exists"});
        } else {
            newuser.save().then(data => {
                res.status(200).json({message: data});
            })
        }
    }).catch(err => res.status(500).json({message: err.message}));

}

export function login(req, res) {
    const { email, password} = req.body;

    userModel.findOne({email}).then(data => {
        if(!data) {
            res.status(404).json({message: "user is not registered"});
        }

        let isValidPassword = bcrypt.compareSync(password, data.password);

        if(!isValidPassword) {
            res.status(403).send({message: "Invalid Password"});
        }

        let token = jwt.sign({id: data._id}, "secretKey", {expiresIn: "1h"});

        res.send( {
            user: {
                id: data._id,
                email: data.email,
                fullName: data.fullName
           },
           accessToken: token
        })
    }).catch(err => {
        res.status(500).send({message: err.message})
    })
}
