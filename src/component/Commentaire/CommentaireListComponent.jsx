import { useSelector } from "react-redux";
import { selectPostCommentaires } from "../../store/selector/comment-selector";
import AddCommentaireComponent from "./AddCommentaireComponent";

const CommentaireListComponent = () => {

    const commentaires = useSelector(selectPostCommentaires);

    return (
        <section>
            <h1>Liste des commentaires</h1>
            <AddCommentaireComponent />
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