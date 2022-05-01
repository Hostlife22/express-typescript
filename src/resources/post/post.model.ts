import Post from '@/resources/post/post.interface';
import { model, Schema } from 'mongoose';

const PostShema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model<Post>('Post', PostShema);
