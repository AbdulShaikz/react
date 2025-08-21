import { FaHome, FaUser } from "react-icons/fa"
import { IoSettings } from "react-icons/io5"

const Sidebar = () => {
  return (
    <aside className="fixed bg-blue-900 h-screen w-16 p-4 flex flex-col items-center gap-9">
        <div className=" break-normal font-bold text-white">LOGO</div>
        <FaHome className="w-5 h-5 mb-3 text-white cursor-pointer hover:text-gray-400"/>
        <FaUser className="w-5 h-5 mb-3 text-white cursor-pointer hover:text-gray-400"/>
        <IoSettings className="w-5 h-5 mb-3 text-white cursor-pointer hover:text-gray-400"/> 
    </aside>
  )
}

export default Sidebar