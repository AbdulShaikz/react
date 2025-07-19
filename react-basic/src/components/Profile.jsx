import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({ name: "", age: 0 });
  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>Name:
          <input 
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}  
          />
        </label>
      </div>
      <div>
        <label>Age:
          <input 
            type="number"
            name="age"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}  
          />
        </label>
      </div>

      {user.name && user.age ? (
        <div>
          <h3>User Profile</h3>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ) : (
        <p>Please enter your name and age.</p>
      ) }
    </div>
  )
}

export default Profile