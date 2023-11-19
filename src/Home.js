import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  
  const [blogs, setBlogs] = useState([
    { title: 'hhhhhhhhhh', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'gggggggggggg', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'cccccccccccccc', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  const all =[
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }];
  
  const test =()=>{

    setBlogs(all);
  }

    return (

      <div className="Home">
        <BlogList blogs={blogs} title="All Blogs" />
        <BlogList blogs={blogs.filter((blog)=> blog.author === "mario")} title="All Blogs" />
         <button onClick={test}>click</button>
      </div>
     
      
        
      );
}
 
export default Home;
