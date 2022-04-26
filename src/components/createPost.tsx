import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './createPost.module.css';

const CreatePost = () => {
    return (
        <div className={styles.createPost}>
            <input placeholder="What's on your mind?" className={styles.postInput} />
            <div className={styles.postBottom}>
                <div className={styles.mediaButtons}>
                    <div>
                        <FontAwesomeIcon icon={["fal", "camera"]} />
                        <span className={styles.buttonLabel}>Add Media</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={["fal", "video"]} />
                        <span className={styles.buttonLabel}>Go Live</span>
                    </div>
                </div>
                <div className={styles.postButton}>Post</div>
            </div>
        </div>
    )
}

export default CreatePost;