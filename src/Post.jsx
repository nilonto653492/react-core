export default function Post({post}){
    return(
        <div className="n-card">
            <h5>{post.title}</h5>
            <h4>{post.body}</h4>
        </div>
    )
}