import { use } from "react"
import Post from "./post";
export default function Posts({postsPromise}){

    const posts = use(postsPromise);
    console.log(posts);


    return(
       
        <div className="n-card">
            <h2>All post are here:{posts.length}</h2>
            {
                posts.map(post =><Post post={post}>  </Post>)
            }
        </div>

    )
}