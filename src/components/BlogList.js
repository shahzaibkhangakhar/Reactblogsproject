import { Link } from 'react-router-dom'

//receiving props (blogs) from home component
const BlogList = ({ blogs, title }) => {
  // const blogs= props.blogs; 2nd way to receive

  return (
    <div className='blog-list'>
      <h6>This is Blog list component</h6>
      <h2>{title}</h2>
      {blogs.map(i => (
        <div className='blog-preview' key={i.id}>
          {/* This is console wale comma `` not '' or " " */}
          <Link to={`/blogs/${i.id}`}>
            <h2>{i.title}</h2>
            <p>{i.author}</p>
          
          </Link>
        </div>
      ))}
    </div>
  )
}
export default BlogList
