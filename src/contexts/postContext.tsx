import React, { createContext, useState } from 'react';
import constants  from "../constants/starterPosts";
import { IPost, ILocalComment, IPostsContext } from '../types/posts';

export const PostsContext = createContext<IPostsContext>({posts: [], fetchPosts: () => {}});

const PostsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    
    const fetchPosts = () => {
        const { STARTER_POSTS } = constants;
        const localCommentsForStarterPosts: ILocalComment[] = JSON.parse(localStorage.getItem("eFuseCommentsForStarters") || '[{"id":0,"comments":[]},{"id":1,"comments":[]}]');
        const localPosts: IPost[] = JSON.parse(localStorage.getItem("eFusePosts") || "[]");

        const starterPosts = [];
        starterPosts.push(...STARTER_POSTS);

        STARTER_POSTS.forEach((post, i) => {
            post.comments = [];
            post.comments = STARTER_POSTS[i].comments.concat(localCommentsForStarterPosts[i].comments);
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