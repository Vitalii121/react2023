import {useEffect, useState} from "react";
import {CommentsService} from "../../services/commentsService";
import {Comment} from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);


    useEffect(() => {
        CommentsService.getAll().then(({data})=>setComments(data))
    }, []);


    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};