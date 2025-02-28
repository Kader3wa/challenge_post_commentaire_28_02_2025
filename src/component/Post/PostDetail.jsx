import { useSelector } from "react-redux";
import { selectPostDetails } from "../../store/selector/post-selector";
import { selectUserDetails } from "../../store/selector/user-selector";
import CommentaireListComponent from "../Commentaire/CommentaireListComponent";

const PostDetail = () => {

    const post = useSelector(selectPostDetails);
    const user = useSelector(selectUserDetails);

    return (
        <>
            <section>
                <h1>Detail Post</h1>
                <article className="card">
                    <h3 className="card-title">{post.title}</h3>
                    <p>{post.body}</p>
                    <h4>Auteur: {user.name}</h4>
                </article>
            </section>

            <CommentaireListComponent />

        </>
    );
}

export default PostDetail;