export interface IComment {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    stats: {
        hypes: number,
        shares: number,
        replies: number,
        likes: number
    },
    isLiked: boolean
}

export interface ICommentProps {
    comment: IComment,
    toggleLikeComment: (commentId: number) => void
}

export interface ILocalComment {
    id: number,
    comments: IComment[]
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
        likes: number
    },
    isLiked: boolean,
    comments: IComment[]
}

export interface IPostProps {
    post: IPost
}

export interface IPostsContext {
    posts: IPost[],
    fetchPosts: () => void
}