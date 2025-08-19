import type React from "react"
import { IoClose } from "react-icons/io5";

const Modal:React.FC<{children: React.ReactNode; onClose: () =>void}> = ({children, onClose}) => {
  return (
    <div className="inset-0 fixed bg-black/50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow relative">
            {children}

            <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={onClose}
            >
                <IoClose className="hover:text-gray-700"/>
            </button>
        </div>
    </div>
  )
}

export default Modal