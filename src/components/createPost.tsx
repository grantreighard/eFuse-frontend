import styles from './createPost.module.css';

const CreatePost = () => {
    return (
        <div className={styles.createPost}>
            <input placeholder="What's on your mind?" className={styles.postInput} />
        </div>
    )
}

export default CreatePost;