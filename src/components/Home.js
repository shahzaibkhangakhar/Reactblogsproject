import useFetch from '../useFetch'
import BlogList from './BlogList'

const Home = () => {
  //blogs is the name of data we get or we set the name blogs for the data we ger from the usefetch hook's url
  const { data: blogs, isPending, error } = useFetch(
    'http://localhost:8000/blogs'
  )

  return (
    <div className='home'>
      <center>
        <h3>Homepage</h3>
      </center>

      {/* sending props to  BlogList component blogs is the data fetch from the api*/}
      {blogs && <BlogList blogs={blogs} title='ALL BLOGS' />}
      <br />
      <br />
      {/* show loading message on browser screen */}
      <center> {isPending && <div> Loading....</div>}</center>
      <br />
      <br />
      {/* show error on browser screen */}
      <center>{error && <div> {error} </div>}</center>
    </div>
  )
}

export default Home
