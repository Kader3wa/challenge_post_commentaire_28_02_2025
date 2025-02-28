import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { fetchPostDetails } from "../../store/feature/postSlice";
import { fetchUserDetails } from "../../store/feature/userSlice";
import { fetctPostComments } from "../../store/feature/commentSlice";

const PostItem = ({ post }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hadleShowDetailPost = () => {
        dispatch(fetchPostDetails(post.id));
        dispatch(fetchUserDetails(post.userId));
        dispatch(fetctPostComments(post.id));
        navigate(`/detail-post/${post.id}`);
    }

    return (
        <article className="card">
            <h3 className="card-title">{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={hadleShowDetailPost}>
                Détails
            </button>
        </article>
    )
}

export default PostItem;