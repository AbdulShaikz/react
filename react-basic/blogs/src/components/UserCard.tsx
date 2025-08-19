import { FaUserCircle } from "react-icons/fa";

interface UserCardProps{
    person:{
        name: string;
        following:boolean;
    }
}

const UserCard = ({person}:UserCardProps) => {
  return (
    <div className="flex justify-between items-center">
        <section className="flex items-center">
            <FaUserCircle size={19} className="text-3xl mr-3 text-gray-500"/>
            <span>{person.name}</span>
        </section>
        <button
            className={`px-2 py-1 rounded-md cursor-pointer ${person.following?'bg-black text-white hover:bg-red-500':'hover:bg-blue-600'} hover:text-white`}
        >
            {person.following?"Following":"Follow"}
        </button>
    </div>
  )
}

export default UserCard