import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) =>
{
    try
    {
        const {message} = req.body;  // message is the message that the user wants to send
        const {id: receiverId} = req.params;
        console.log(receiverId, "receiverId")
        const senderId = req.user._id;  // senderId is the id of the user who is sending the message
        // res.status(200).json(newMessage)

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}  // $all is used to check if all the elements in the array are present in the document
        });
        if(!conversation)
        {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage)
        {
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();

        
        await Promise.all([conversation.save(), newMessage.save()]);  // this will save both the conversation and the message in parallel
        res.status(200).json({newMessage});

    }
    catch(error)
    {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({Message: error.message})
    }
};

export const getMessage = async (req, res) =>
{
    try
    {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages");

        if(!conversation)
        {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;
        res.status(200).json(messages);
    }
    catch(error)
    {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({Message: error.message})
    }
};