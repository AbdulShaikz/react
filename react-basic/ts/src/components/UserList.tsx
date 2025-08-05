import { useEffect, useState } from "react";

type UserData = {
    id: number;
    name: string;
    username:string;
    email:string;
    phone:string;
}
const UserList = () => {
  const [data, setData] = useState<UserData[]>([]);
  useEffect(()=>{
    const fetchData = async () =>{
      try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const result = await response.json();
          setData(result);
      } catch (error) {
          console.log("Error fetching user data:",error);
      }
    };
    fetchData();
  },[])
  return (
    <div>
        {data.length > 0 ? (
            <ul>
              {data.map((user: UserData)=>(
                <div key={user.id}>
                  <li>{user.id}</li>
                  <li>{user.name}</li>
                  <li>{user.username}</li>
                  <li>{user.email}</li>
                  <li>{user.phone}</li>
                </div>
              ))}
            </ul>
        ) : <p>Loading...</p>}
    </div>
  );
}

export default UserList