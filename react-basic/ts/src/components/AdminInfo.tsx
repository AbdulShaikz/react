import type { AdminInfoList } from "../types"

const AdminInfo = ({id,name,email,role,permissions}:AdminInfoList) => {
  return (
    <div>
        <h1>Admin Info</h1><hr />
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Role: {role}</p>
        <p>Permissions: {permissions.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo