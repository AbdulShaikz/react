import { FaStar } from "react-icons/fa"
import { useState } from "react"

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="w-[100vw] h-screen bg-[#e7e9fa] flex flex-col justify-center items-center">
        <div className="w-[30rem] h-[20rem] bg-[#ffffff] rounded-md shadow-xl flex items-center justify-center">
            <div className="flex items-center gap-5">
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <FaStar
                            key={index}
                            className="cursor-pointer text-3xl"
                            color={currentRating <= (hover || rating) ? "#fccc16" : "#e4e5e9"}
                            onClick={() => setRating(currentRating)}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(rating)}
                        />
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Rating