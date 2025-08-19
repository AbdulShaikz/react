import { useEffect, useState } from "react";
import { useBlogs } from "../shared/BlogContext"
import type { Blog } from "../types";


interface BlogFormProps {
    existingBlog?:Blog;
    onClose: () => void;
}

const BlogForm:React.FC<BlogFormProps> = ({existingBlog, onClose}) => {

    const { addBlog, updateBlog } = useBlogs();
    const [title, setTitle] = useState(existingBlog?.title || '');
    const [description, setDescription] = useState(existingBlog?.description || '');
    const [image, setImage] = useState(existingBlog?.image || '');
    const [time,setTime] = useState(existingBlog?.time || new Date().toLocaleString('en-Us',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true}));

    useEffect(()=>{
        if(existingBlog){
            setTitle(existingBlog.title);
            setDescription(existingBlog.description);
            setImage(existingBlog.image);
            setTime(existingBlog.time);
        }
    },[existingBlog])

    const handleSubmit = () => {
        const blog:Blog = {
            id: existingBlog? existingBlog.id : Date.now(),
            title,
            description,
            image,
            time
        }

        if(existingBlog){
            updateBlog(blog);
        }else{
            addBlog(blog);
        }

        onClose();
    };

    return (
        <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
            <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {existingBlog?'Edit Blog': 'Add Blog'}
            </h3>
            <div className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className="block w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 rounded-lg shadown-sm"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    className="block resize-none h-32 w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 rounded-lg shadown-sm"
                />

                <input type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                    className="block w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 rounded-lg shadown-sm"
                />

                <input type="date" 
                    placeholder="Date"
                    value={time}
                    onChange={(e)=>setTime(e.target.value)}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            <section className="flex justify-end mt-6 space-x-4">
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                    {existingBlog?"Update":"Add"}
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-900"
                >
                    Cancel
                </button>
            </section>
        </div>
    )
}

export default BlogForm