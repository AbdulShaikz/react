import type { Info } from "../types"

const UserInfo = ({id,name,email}:Info) => {
  return (
    <div>
        <h1>User Information</h1><hr />
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Id: {email}</p>
    </div>
  )
}

export default UserInfo