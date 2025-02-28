import { useDispatch, useSelector } from "react-redux";
import { selectPostCommentaires } from "../../store/selector/comment-selector";
import { addComment } from "../../store/feature/commentSlice";
import { useState } from "react";
import { selectUserDetails } from "../../store/selector/user-selector";

const CommentaireListComponent = () => {

    const commentaires = useSelector(selectPostCommentaires);
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const [user, setUser] = useState(useSelector(selectUserDetails));

    const handleAddPostComment = () => {
        dispatch(addComment())
    }


    return (
        <section>
            <h1>Liste des commentaires</h1>
            <button className="btn">Commenter</button>
            {
                commentaires.map(
                    commentaire =>
                        <div key={commentaire.id} className="card">
                            <h3 className="card-title">{commentaire.name}</h3>
                            <p>{commentaire.body}</p>
                        </div>
                )
            }
        </section>
    )
}

export default CommentaireListComponent;