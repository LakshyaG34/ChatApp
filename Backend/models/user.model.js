import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    password: {
        type: String,
        required: true,
        unique : true,
    },
    confirmPassword: {
        type: String,
        // required: true,
        unique : true,
    },        
    gender: {
        type: String,
        required: true,
        enum : ["male", "female"],
    },           
    profilePic:
    {
        type : String,
        default : "",
    }
})          // This is the schema for the User model. It has a username, passwordHash, and an array of blogs. The blogs array is an array of ObjectIds that reference the Blog model.

const User = mongoose.model("User", userSchema) // This is the User model. It is a model for the User schema.

export default User // This exports the User model. It is imported in the auth.routes.js file. It is used to interact with the User collection in the MongoDB database. It is used to create, read, update, and delete users from the User collection. It is used to authenticate users. It is used to create, read, update, and delete blogs from the blogs array in the User collection. It is used to find users by their username. It is used to find users by their id