import { IPost } from "../types/posts";

const STARTER_POSTS: IPost[] = [
    {
        id: 0,
        user: "Nickmercs",
        timestamp: 1651011986288,
        content: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.",
        stats: {
            hypes: 100,
            comments: 25,
            shares: 12,
            views: 100,
            likes: 50
        },
        isLiked: false,
        comments: []
    },{
        id: 1,
        user: "Nickmercs",
        timestamp: 1651011986288,
        content: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.",
        stats: {
            hypes: 100,
            comments: 25,
            shares: 12,
            views: 100,
            likes: 50
        },
        isLiked: false,
        comments: [
            {
                id: 0,
                title: "Title goes here",
                subtitle: "Secondary title goes here",
                content: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.",
                stats: {
                    hypes: 100,
                    replies: 25,
                    shares: 12,
                    likes: 50
                },
                isLiked: false,
            }
        ]
    }
]

export default STARTER_POSTS;