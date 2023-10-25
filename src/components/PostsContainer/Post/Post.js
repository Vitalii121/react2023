import "./Post.modul.css"

const Post = ({post, getPostId}) => {
    const {id, title} = post;

    return (
        <div>
            <div className="wrapper">
                <div className="wrap">
                    <h3>id: {id}</h3>
                    <h4>title: {title}</h4>
                </div>
                <button onClick={() => getPostId(id)}>Details</button>
            </div>
        </div>
    );
};

export {Post};