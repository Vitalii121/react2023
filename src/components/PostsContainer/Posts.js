import {useEffect, useState} from "react";

import {useLocation} from "react-router-dom";

import {Post} from "./Post";
import {postsService as postService} from "../../services/postsService";


const Posts = () => {

    const {state: {postId}} = useLocation();
    console.log(postId);

    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(({data}) =>setPost(data))
    }, [postId])

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};