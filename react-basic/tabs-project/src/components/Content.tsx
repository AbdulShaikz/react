import { useState } from "react"
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Content = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");
  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");
  
  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];

    if(file){
      setBannerUrl(URL.createObjectURL(file));
    }
  }
  
  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-0 md:ml-[5rem] h-screen">
      <div className="relative">
        <img 
          src={bannerUrl} 
          alt="Background Image" 
          className="w-full h-60 object-cover"
        />
        <button
          className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24}/>
          </label>
          <input type="file" id="banner-upload" accept="image/*" className="hidden" onChange={handleBannerChange} />
        </button>
      </div>

      <div className="ml-4 mt-[-4rem]">
        <div className="relative w-40">
          <img
            src={profileUrl}
            alt="Channel Logo"
            className="w-40 h-40 object-cover rounded-full border-4 border-white"
          />
          <button className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={24} />
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </button>
        </div>

        <div className="mt-4">
          <h1 className="text-2xl font-bold">WebDev</h1>
          <p>1M views</p>
          <p className="mt-2">Short description about the channel.</p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
          <Tabs/>
        </div>
      </div>
    </div> 
  )
}

export default Content