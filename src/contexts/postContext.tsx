import React, { createContext, useState } from 'react';
import STARTER_POSTS  from "../constants/starterPosts";
import { IPost, ILocalComment, IPostsContext } from '../types/posts';

export const PostsContext = createContext<IPostsContext>({posts: [], fetchPosts: () => {}});

const PostsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    
    const fetchPosts = () => {
        const localCommentsForStarterPosts: ILocalComment[] = JSON.parse(localStorage.getItem("eFuseCommentsForStarters") || '[{"id":0,"comments":[]},{"id":1,"comments":[]}]');
        const localPosts: IPost[] = JSON.parse(localStorage.getItem("eFusePosts") || "[]");

        const starterPosts = [];
        starterPosts.push(...STARTER_POSTS.slice());

        const mappedPosts = starterPosts.map((post, i) => {
            const clone = Object.assign({}, post)
            clone.comments = STARTER_POSTS[i].comments.concat(localCommentsForStarterPosts[i].comments);
            return clone;
        })

        if (localPosts.length) {
            setPosts(mappedPosts.concat(localPosts))
        } else {
            setPosts(mappedPosts);
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