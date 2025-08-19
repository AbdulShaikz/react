import { IoMdAddCircle } from "react-icons/io"
import Navigation from "./components/Navigation"
import PeopleToFollow from "./components/PeopleToFollow"
import TopicsList from "./components/TopicsList"
import TrendsList from "./components/TrendsList"
import { BlogProvider } from "./shared/BlogContext"
import { useState } from "react"
import type { Blog } from "./types"
import Modal from "./components/Modal"
import BlogForm from "./components/BlogForm"
import ArticleList from "./components/ArticleList"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | undefined>(undefined);

  const openModalForNewBlog = () => {
    setIsModalOpen(true);
    setEditingBlog(undefined);
  }

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  }

  return (
    <div>
      <BlogProvider>
        <Navigation/>
        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
                onClick={openModalForNewBlog}
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]"/>
              </button>
              <ArticleList onEdit={openModalForEdit} />
              {isModalOpen && 
                <Modal onClose={()=>setIsModalOpen(false)}>
                  <BlogForm 
                    existingBlog={editingBlog}
                    onClose={()=>setIsModalOpen(false)}
                  />
                </Modal>}
            </div>
          </section>
          <div className="w-[30%]">
            <PeopleToFollow/>
            <TrendsList/>
            <TopicsList/>
          </div>
        </div>
      </BlogProvider>
    </div>
  )
}

export default App
