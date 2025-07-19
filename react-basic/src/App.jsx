import UpdateUser from "./components/UpdateUser";
import { UserProvider } from "./components/UserContext";
import UserProfile from "./components/UserProfile";

function App(){
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser/>
    </UserProvider>
  )
}

export default App;