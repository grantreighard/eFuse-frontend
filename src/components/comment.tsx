import styles from './comment.module.css';

interface ICommentStats {
    hypes: number,
    shares: number,
    replies: number
}

interface IComment {
    comment: {
        id: number,
        title: string,
        subtitle: string,
        content: string,
        stats: ICommentStats
    }
}

const Comment: React.FC<IComment> = ({ comment }: IComment) => {
    return (
        <div className={styles.comment}>
            Comment
        </div>
    )
}

export default Comment;