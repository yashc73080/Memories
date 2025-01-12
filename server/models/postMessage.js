import mongoose from 'mongoose';

// Create the schema for documents. Specify that each memory 'post' will have these things. 
const postSchema = mongoose.Schema({
    title: String,
    message: String, 
    creator: String,
    tags: [String], 
    selectedFile: String, 
    likeCount: {
        type: Number, 
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// Make a model out of the schema
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;