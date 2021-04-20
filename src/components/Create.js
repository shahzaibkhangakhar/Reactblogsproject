import { useState } from "react"
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('Gakhar Blogs');
    const [isPending,setisPending]=useState(false);
    const history = useHistory();
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        //create new blog object
        const blog={title,body,author};
        setisPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(blog)

        }).then(()=>{
            console.log("New Blog Added");
            setisPending(false);
            //push back to home page
            history.push('/');
        })
    }
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type='text' required  value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>Blog body </label>
        <textarea required 
        value={body} 
        onChange={(e)=>setBody(e.target.value)}>
        </textarea>
        <label> Blog author:</label>
        <select
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}>
          <option value='mario'>Mario</option>
          <option value='youshi'>Youshi</option>
          <option value='Gakhar Blogs'>Gakhar's Blogs</option>
          <option value='Honda Guy'>Honda Guy</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending &&  <button disabled >Adding Blog...</button>}
        <br/>
       <p>{title}</p> 
       <p>{ body }</p>
       <p>{author}</p>
      </form>
    </div>
  )
}

export default Create
