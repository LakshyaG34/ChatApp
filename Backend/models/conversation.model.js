import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      //array of participants
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      //array of messages
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true } //this will automatically create the fields createdAt and updatedAt})
);

const conversation = mongoose.model("Conversation", conversationSchema);
export default conversation;
