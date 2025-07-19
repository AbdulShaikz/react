import { use, useContext, useState } from "react";
import { UserContext } from "./UserContext"

const UpdateUser = () => {
  const { user, updateUser } = useContext(UserContext);
  const [userName, setUserName] = useState(user.name.length > 0 ? user.name : "");
  const handleUpdate = () => {
    updateUser(userName);
    setUserName("");
    console.log("User name updated to:", userName);
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <div>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter New Name"/>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  )
}

export default UpdateUser