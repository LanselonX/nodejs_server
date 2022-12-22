import mongoose from 'mongoose';


const Post = new mongoose.Schema({
    author: {type: String , required: true},
    title: {type: String , required: true},
    content: {type: String , required: true},
    picture: {type: String}
})

// const People = new moongose.Schema({
//     name: {type: String, required: true},
//     age: {type: int, required: true},
//     email: {type: string}
// })

export default mongoose.model('Post', Post)