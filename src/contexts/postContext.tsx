import React, { createContext, useState } from 'react';
import STARTER_POSTS from "../constants/starterPosts";
import { IPost, IComment, IPostsContext } from '../types/posts';

export const PostsContext = createContext<IPostsContext>({posts: [], fetchPosts: () => {}});

const PostsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    
    const fetchPosts = () => {
        const localCommentsForStarterPosts: IComment[] = JSON.parse(localStorage.getItem("eFuseCommentsForStarters") || "[]")
        const localPosts: IPost[] = JSON.parse(localStorage.getItem("eFusePosts") || "[]");
        
        const starterPosts: IPost[] = STARTER_POSTS.map((post, i) => {
            const localComments = localCommentsForStarterPosts.filter(commentObj => commentObj.id === i)[0];
            post.comments.concat(localComments);
            return post;
        })

        if (localPosts.length) {
            setPosts(starterPosts.concat(localPosts))
        } else {
            setPosts(starterPosts);
        }
    }

    return (
        <PostsContext.Provider value={{ 
            posts,
            fetchPosts
        }} >
            {children}
        </PostsContext.Provider>
    )
}

export default PostsContextProvider;