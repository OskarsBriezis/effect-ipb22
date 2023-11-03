import { useEffect, useState } from "react";

function Post() {
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);
    useEffect (() => {
        async function getPost() {
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
            const postData = await response.json();
            getPost(postData);
            setLoading(false);
        }
        setPost();
    }, [] );
    return <>{loading ? <p>Loading....</p> : <p>{post}</p>}</>
    }

export default Post;