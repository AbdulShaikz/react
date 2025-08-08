import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"

const SideBar = () => {
    return (
        <aside className="w-16 md:w-[5%] bg-gray-900 min-h-screen p-1 md:p-2 flex flex-col justify-between">
            <section className="top flex flex-col gap-2 md:gap-4 items-center p-1 md:p-2">
                <div className="hover:bg-gray-800 p-1 md:p-2 rounded-lg cursor-pointer">
                    <FaHome color="white" size={24} className="md:w-[29px] md:h-[29px]"/>
                </div>
                <div className="hover:bg-gray-800 p-1 md:p-2 rounded-lg cursor-pointer">
                    <FaUser color="white" size={24} className="md:w-[29px] md:h-[29px]"/>
                </div>
            </section>
            
            <section className="bottom flex flex-col gap-2 md:gap-4 items-center p-1 md:p-2">
                <div className="hover:bg-gray-800 p-1 md:p-2 rounded-lg cursor-pointer">
                    <FaCog color="white" size={24} className="md:w-[29px] md:h-[29px]"/>
                </div>
                <div className="hover:bg-gray-800 p-1 md:p-2 rounded-lg cursor-pointer">
                    <FaSignOutAlt color="white" size={24} className="md:w-[29px] md:h-[29px]"/>
                </div>
            </section>
        </aside>
    )
}

export default SideBar