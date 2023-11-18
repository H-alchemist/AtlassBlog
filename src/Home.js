import { useState } from "react";


const Home = () => {

    
    const [name , setName] = useState('hi');

    const chanveValue = () =>{
           setName('fuck off');
    }

    return (

      <div className="Home">
      <h2>{name}</h2>
      
      <button onClick={chanveValue}>click me</button>
      
      </div>
      
      
        
      );
}
 
export default Home;

