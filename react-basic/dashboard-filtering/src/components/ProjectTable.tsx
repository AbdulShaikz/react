import { useState } from "react";
import { data } from "../utils/data";

const ProjectTable = () => {
  const [projects, setProjects] = useState(data);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage-1)*itemsPerPage;
  const currentProjects = projects.slice(startIndex,startIndex+itemsPerPage);
  const totalPages = Math.ceil(projects.length/itemsPerPage);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 w-[93%] ml-[5rem]">
      {/* Sorting */}

      {/* Main Table */}
      <table className="min-w-full table-auto rounded border border-gray-700 text-white">
        <thead>
          <tr>
            <th className="px-5 py-3 text-left">Image</th>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Country</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Project Name</th>
            <th className="px-5 py-3 text-left">Task Progress</th>
            <th className="px-5 py-3 text-left">Status</th>
            <th className="px-5 py-3 text-left">Date</th>
            <th className="px-5 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project,index) => (
            <tr key={index} className="border border-gray-700">
              <td className="px-4 py-2">
                <img
                  src={project.image} 
                  alt={project.client}
                  className="rounded-full object-cover w-[3rem] h-[3rem]"
                />
              </td>
              <td className="px-4 py-2">{project.client}</td>
              <td className="px-4 py-2">{project.country}</td>
              <td className="px-4 py-2">{project.email}</td>
              <td className="px-4 py-2">{project.project}</td>
              <td className="px-4 py-2">
                <div className="w-24 h-2 bg-gray-700 rounded">
                  <div style={{ width: project.progress }} className='h-2 bg-green-500 rounded'>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2 w-[10rem]">
                <span
                  className={`bg-${project.status==="Completed"?"green":"yellow"}-500 p-1 rounded`}
                >
                  {project.status}
                </span>
              </td>
              <td className="px-4 py-2">{project.date}</td>
              <td className="px-4 py-2"></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button
          disabled={currentPage==1}
          className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
          onClick={()=>handlePageChange(currentPage-1)}
        >
          Previous
        </button>
        <span
        className="px-4 py-2 text-white"
        >
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage==totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded ml-2 disabled:opacity-50"
          onClick={()=>handlePageChange(currentPage+1)}
        >
          Next
        </button>
      </div> 

    </div>
  );
};

export default ProjectTable;