import ProjectTable from "./ProjectTable"
import Sidebar from "./Sidebar"

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 bg-gray-900">
        <ProjectTable />
      </div>
    </div>
  )
}

export default Dashboard