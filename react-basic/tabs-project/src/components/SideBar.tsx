import { FaHome, FaSearch, FaUser } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"

const SideBar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1A1C1E] text-white hidden md:block">
        <ul className="p-4 flex flex-col justify-between items-center h-full">
            <div className="top">
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaHome className="mb-2" size={29}/>
                    </div>
                </li>
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaSearch className="mb-2" size={29}/>
                    </div>
                </li>
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaUser className="mb-2" size={29}/>
                    </div>
                </li>
            </div>
            <div className="bottom">
                <li className="mb-2">
                    <div className="flex items-center">
                        <IoMdSettings className="mb-2" size={29}/>
                    </div>
                </li>
            </div>
        </ul>       
    </aside>
  )
}

export default SideBar