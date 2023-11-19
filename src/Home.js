import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'ui', id: 3 },
    { title: 'My new website', body: 'lorem ipsum...', author: 'ui', id: 4 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 5 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 6 }
  ])

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      {/* <button onClick={() => setName('luigi')}>change name</button> */}
      <button onClick={() =>{setName("hamza")}} >change name</button><br></br>
       <button onClick={() =>{setName("ahmed")}} >change name</button><br></br>
       <p>{name}</p>
    </div>
  );
}
 
export default Home;