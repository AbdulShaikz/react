import { useEffect, useState } from "react";

const FetchDataEffect = () => {

  const [data,setData]= useState([]);
  
  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setData(data);
        console.log("Data fetched successfully:", data);
      }catch(error){
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      {data && data.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default FetchDataEffect;