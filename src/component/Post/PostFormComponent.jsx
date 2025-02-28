const PostFormComponent = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="title">Titre</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="content">Contenu</label>
                    <textarea id="content" name="content"></textarea>
                </div>
                <button type="submit">Créer</button>
            </form>
        </div>
    );
}
export default PostFormComponent;