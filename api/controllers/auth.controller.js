import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try { 
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({  
            username, 
            email, 
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ 
            success: true, 
            message: "User created successfully" 
        });

    } catch (error) {
        next(error);
    }
};
