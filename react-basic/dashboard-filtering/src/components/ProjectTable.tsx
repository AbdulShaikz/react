import { useState } from "react";
import type { ChangeEvent } from "react";
import { data } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { MdSort } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

type SortKey = "client" | "country" | "date";

const ProjectTable = () => {
  const [projects, setProjects] = useState(data);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: "ascending" | "descending" } | null>(null);
  const [filters, setFilters] = useState({
    name: "",
    country: "",
    email: "",
    project:"",
    status:"",
  });
  const [statusDropdownVisible, setStatusDropdownVisible] = useState<string | null>(null);
  const statusClasses: Record<string, string> = {
    "Completed": "bg-green-500",
    "In Progress": "bg-yellow-500",
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const filteredProjects = projects.filter((project) => {
    const nameMatch = project.client.toLowerCase().includes(filters.name.toLowerCase());
    const countryMatch = project.country.toLowerCase().includes(filters.country.toLowerCase());
    const emailMatch = project.email.toLowerCase().includes(filters.email.toLowerCase());
    const projectMatch = project.project.toLowerCase().includes(filters.project.toLowerCase());
    const statusMatch = project.status.toLowerCase().includes(filters.status.toLowerCase());

    return nameMatch && countryMatch && emailMatch && projectMatch && statusMatch;
  });

  const sortedProjects = sortConfig ? [...filteredProjects].sort((firstProject, secondProject) => {
    const directionMultiplier = sortConfig.direction === "ascending" ? 1 : -1;

    if (sortConfig.key === "date") {
      const parseDate = (dateValue: string) => {
        const [day, month, year] = dateValue.split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
      };

      return (parseDate(firstProject.date) - parseDate(secondProject.date)) * directionMultiplier;
    }

    return firstProject[sortConfig.key].localeCompare(secondProject[sortConfig.key]) * directionMultiplier;
  }) : filteredProjects;

  const totalPages = Math.max(1, Math.ceil(sortedProjects.length / itemsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const currentProjects = sortedProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleSortOptionClick = (option: SortKey) => {
    setSortConfig((currentSort) => {
      if (currentSort?.key === option) {
        return {
          key: option,
          direction: currentSort.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return { key: option, direction: "ascending" };
    });
    setDropdownVisible(false);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    setCurrentPage(1);
  };

  const handleStatusChange = (client: string, newStatus: string) => {
    const updatedProjects = projects.map((project) => (
      project.client === client ? {
        ...project,
        status: newStatus,
        progress: newStatus === "Completed" ? "100%" : project.progress,
      } : project
    ));
    setProjects(updatedProjects);
    setStatusDropdownVisible(null);
  };

  return (
    <div className="p-4 w-[93%] ml-[5rem]">
      {/* Sorting */}
      <div className="flex items-center mb-5">
        <div className="relative">
          <button
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="border border-gray-700 text-white flex items-center justify-center p-2 rounded"
          >
            <BiSort className="mr-[0.3rem]" />
            Sort
            <AiOutlineDown className="ml-2" />
          </button>
          {dropdownVisible && (
            <div className="absolute top-full left-0 mt-2 rounded bg-gray-800 border border-gray-700 shadow-lg z-10">
              <button
                className="block px-4 py-2 text-white w-full hover:bg-gray-700 text-left"
                onClick={() => handleSortOptionClick("client")}
              >
                Name
              </button>
              <button
                className="block px-4 py-2 text-white w-full hover:bg-gray-700 text-left"
                onClick={() => handleSortOptionClick("country")}
              >
                Country
              </button>
              <button
                className="block px-4 py-2 text-white w-full hover:bg-gray-700 text-left"
                onClick={() => handleSortOptionClick("date")}
              >
                Date
              </button>
            </div>
          )}
        </div>
        {/* Filters */}
        <div className="relative ml-4 w-full">
          <button
            onClick={() => setFiltersVisible(!filtersVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <MdSort className="mr-[0.3rem]" />
            Filters
            <AiOutlineDown className="ml-2" />
          </button>
          {filtersVisible && (
            <div className="absolute top-full left-0 mb-2 bg-gray-800 border border-gray-700 rounded shadow-lg z-10 p-3 w-80">
              <div className="mb-2">
                <label className="block text-white"> Filter by Name:</label>
                <input 
                  type="text"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white"> Filter by Country:</label>
                <input 
                  type="text"
                  name="country"
                  value={filters.country}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white"> Filter by Email:</label>
                <input 
                  type="text"
                  name="email"
                  value={filters.email}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white"> Filter by Project:</label>
                <input 
                  type="text"
                  name="project"
                  value={filters.project}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white"> Filter by Status:</label>
                <input 
                  type="text"
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
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
          {currentProjects.map((project) => (
            <tr key={project.client} className="border border-gray-700">
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
                  className={`${statusClasses[project.status]} p-1 rounded`}
                >
                  {project.status}
                </span>
              </td>
              <td className="px-4 py-2">{project.date}</td>
              <td className="px-4 py-2">
                <div className="relative">
                  <BsThreeDots
                    className="cursor-pointer"
                    onClick={() => setStatusDropdownVisible(statusDropdownVisible === project.client ? null : project.client)}
                  />
                  {statusDropdownVisible === project.client && (
                    <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
                      <button
                        onClick={() => handleStatusChange(project.client, "In Progress")}
                        className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
                      >
                        In Progress
                      </button>
                      <button
                        onClick={() => handleStatusChange(project.client, "Completed")}
                        className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
                      >
                        Completed
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button
          disabled={safeCurrentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
          onClick={() => handlePageChange(safeCurrentPage - 1)}
        >
          Previous
        </button>
        <span
        className="px-4 py-2 text-white"
        >
          Page {safeCurrentPage} of {totalPages}
        </span>
        <button
          disabled={safeCurrentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded ml-2 disabled:opacity-50"
          onClick={() => handlePageChange(safeCurrentPage + 1)}
        >
          Next
        </button>
      </div> 

    </div>
  );
};

export default ProjectTable;