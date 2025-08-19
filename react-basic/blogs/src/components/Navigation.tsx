import { FaSearch, FaUserCircle } from "react-icons/fa"

const Navigation = () => {
  return (
    <nav className="text-black border-gray-200 border-2 flex justify-between items-center p-4">
        <div className="flex items-center max-w-md border-2 rounded-full px-4 py-2 ml-0 md:ml-[5rem]">
            <FaSearch/>
            <input type="text" className="transparent outline-none w-full px-2" placeholder="Search..."/>
        </div>
        <section className="flex items-center px-4 py-2 cursor-pointer mr-0 md:mr-[5rem]">
            <FaUserCircle size={29} className="text-3xl mr-0 md:mr-2"/>
        </section>
    </nav>
  )
}

export default Navigation