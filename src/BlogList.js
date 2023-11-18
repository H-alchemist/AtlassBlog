const BlogList = (props) => {  // const BlogList = ({blogs , title}) => { and work wth them directly
    const blogs = props.blogs;
   
    return ( 
        <div className="blog-list">
        <h1>{props.title}!</h1>
            {
                
          blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
            <h1>{blog.title}</h1>
              <h2>{blog.body}</h2>
              <h4>written by {blog.author}</h4><br></br><br></br>
            </div>
          ))
        
        }
        </div>
     );
}
 
export default BlogList;