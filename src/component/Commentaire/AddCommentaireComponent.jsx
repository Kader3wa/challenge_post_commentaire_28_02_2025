import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserDetails } from "../../store/selector/user-selector";
import { addComment } from "../../store/feature/commentSlice";
import { selectPostDetails } from "../../store/selector/post-selector";
import { selectPostCommentaires } from "../../store/selector/comment-selector";

const AddCommentaireComponent = () => {

    const dispatch = useDispatch();
    const post = useSelector(selectPostDetails);
    const user = useSelector(selectUserDetails);
    const commentaires = useSelector(selectPostCommentaires);
    const [titre, setTitre] = useState("");
    const [commentaire, setCommentaire] = useState("");

    const handleAddComment = () => {
        let comment = {
            postId: post.id,
            id: commentaires.length + 1,
            name: titre,
            email: user.email,
            body: commentaire,
        }
        console.log(comment);
        dispatch(addComment(comment));
    }

    return (
        <div>
            <h4>Ajouter un commentaire</h4>
            <div>
                <label>Titre :</label>
            </div>
            <div>
                <input type="text" placeholder="Titre..." onChange={(ev) => setTitre(ev.target.value)} />
            </div>
            <div>
                <label>Commentaire:</label>
            </div>
            <textarea cols={40} rows={10} onChange={(ev) => setCommentaire(ev.target.value)}></textarea>
            <div>
                <button onClick={handleAddComment}>Valider</button>
            </div>
        </div>
    );
}

export default AddCommentaireComponent;