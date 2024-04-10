import { response } from "express";
import UserModels from "../models/User.js";

// create user 
const CreateUser = async (req, res) => {
    try {
        const { name, fathername, email, phone } = req.body;
        // if you want to validate the email then uncomment the following line 
        // const existingUser = await UserModels.findOne({ email});
        // if(existingUser){
        //     return res.status(404).json({ success: false, message: "User already exists" });
        // }
        const newUser = new UserModels({
            name,
            fathername,
            email,
            phone
        });

        await newUser.save(); // Corrected typo: "save" instead of "seve"

        res.status(200).json({ success: true, message: 'User created successfully', newUser }); // Changed "NewUser" to "newUser" for consistency
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error', newUser}); // Added error message in response
    }
}

// get user 
const GetUser = async (req, res) => {
    try {
        const user = await UserModels.find()
        if(!user){
            return res.status(404).json({ success: false, message: 'User not found' }); //
        }
        res.status(200).json({ success: true, user});
    } catch (error) {
        console.log(error);
     return res.status(500).json({ success: false, message: 'internal server error'});
    }

}

// Update user
const UpdateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const UpdatedUser = await UserModels.findByIdAndUpdate(userId, req.body, { new: true });
        if (!UpdatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, message: 'User updated successfully', updatedUser: UpdatedUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

// Delete user using api 
const DeleteUser = async (req, res) => {
 try {
    const userId = req.params.id;
 const DeletedUser = await UserModels.findByIdAndDelete(userId)
 if(!DeletedUser){
    return res.status(404).json({ success: false, message: 'User not found' });
 }
 res.status(200).json({ success: true, message: 'Deleted user successfully'});
 } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
 }
}
export { CreateUser, GetUser, UpdateUser, DeleteUser };