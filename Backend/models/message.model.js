import mongoose from "mongoose"


const messageSchema = new mongoose.Schema({

    senderID:
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    receiverID:
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    message:
    {
        type : String,
        required : true
    },
},
    {timestamps : true}  //this will automatically create the fields createdAt and updatedAt
);

const Message = mongoose.model("Message", messageSchema);

export default Message;