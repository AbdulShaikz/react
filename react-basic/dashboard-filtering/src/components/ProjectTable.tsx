import { useState } from "react";
import { data } from "../utils/data";

const ProjectTable = () => {
  const [projects, setProjects] = useState(data);


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

        </tbody>
      </table>

      {/* Pagination */}

    </div>
  );
};

export default ProjectTable;