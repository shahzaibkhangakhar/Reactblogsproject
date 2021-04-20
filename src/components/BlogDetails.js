import { useHistory, useParams } from "react-router";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const { id }= useParams();
    const {data:blog, isPending, error}=useFetch('http://localhost:8000/blogs/' + id);
    const history=useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method: 'DELETE'
        }).then(()=>{
history.push('/');        })
    }
    return (  
    <div className="blog-details">
        <h2> Blog Details - {id}</h2>
        <br/>
        {isPending && <div>Loading...</div>}
        {error && <div>{error} </div>}
        {blog && (
            <article>
                <h2>{ blog.title }</h2>
                <br/>
                <p> <b>Written by:</b> {blog.author}</p>
                <br/>
                <div> <h3>Details : </h3>{ blog.body }</div>
                <button onClick={handleClick}> Delete</button>
            </article>
        )}
    </div>
    );
}
 
export default BlogDetails;