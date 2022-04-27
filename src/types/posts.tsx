export interface IComment {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    stats: {
        hypes: number,
        shares: number,
        replies: number
    }
}

export interface ICommentProps {
    comment: IComment
}

export interface IPost {
    id: number,
    user: string,
    timestamp: number,
    content: string,
    stats: {
        hypes: number,
        comments: number,
        shares: number,
        views: number,
    },
    comments: IComment[]
}

export interface IPostProps {
    post: IPost
}

export interface IPostsContext {
    posts: IPost[],
    fetchPosts: () => void
}