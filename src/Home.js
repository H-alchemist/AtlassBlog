const Home = () => {


    const clickHandel = (e) =>{
      console.log("hello , niggas" , e);
    }

    const handelClickAgian = (res,e) =>{
      console.log("hello " + res ,e.target);
  }

    return (

      <div className="Home">
      <h2>home page</h2>
      
      <button onClick={clickHandel}>click me</button>
      <button  onClick={(e)=>{handelClickAgian("mario",e)}}> click me again</button>
      
      </div>
      
      
        
      );
}
 
export default Home;

