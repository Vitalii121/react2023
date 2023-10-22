import "./PostDetails.modul.css"


const PostDetails = ({postDetails}) => {
    const {id, title, body, userId} = postDetails;

    return (
        <div className="infoWrap">
            <h2>id: {id}</h2>
            <h2>title: {title}</h2>
            <h3>body: {body}</h3>
            <h3>userId: {userId}</h3>
        </div>
    );
};

export {PostDetails};