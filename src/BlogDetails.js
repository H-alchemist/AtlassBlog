import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    

   const { error, isPending, data: blogs } = useFetch( 'http://localhost:8000/blogs/'+ id);

  

  return (
    <div className="blog-details">
      <h2>Blog details - { id }</h2>
      <h1>{blogs && blogs.title} </h1>
      <p>{blogs && blogs.body}</p>
    </div>
  );
}
 
export default BlogDetails;