interface IPostStats {
    hypes: Number,
    comments: Number,
    shares: Number,
    views: Number,
}

interface ICommentStats {
    hypes: Number,
    shares: Number,
    replies: Number
}

interface IComment {
    id: Number,
    title: String,
    subtitle: String,
    content: String,
    stats: ICommentStats
}

interface IPost {
    post: {
        id: Number,
        user: String,
        timestamp: Number,
        content: String,
        stats: IPostStats,
        comments: IComment[]
    }
}

const Post: React.FC<IPost> = ({ post }: IPost) => {
    return (
        <div>
            {post.user}
        </div>
    )
}

export default Post;