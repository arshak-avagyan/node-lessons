import mongoose from 'mongoose';

const Post = mongoose.Schema({
    userId: {type: String, required: true},
    userName: {type: String, required: true},
    userAge: {type: Number, required: true},
    userPhoto: {type: String}
})


export default mongoose.model('Post', Post)