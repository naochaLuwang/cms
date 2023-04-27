"use client";
import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { format } from "date-fns";
import axios from "axios";

interface MenusProps {
  id: string;
  title: string;
  slug: string;
  order: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  submenus: SubmenuProps[];
  actions?: React.ReactNode;
}

interface SubmenuProps {
  id: string;
  menuId: string;
  title: string;
  slug: string;
  order: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

const Table = ({
  data,
  headings,
}: {
  data: MenusProps[];
  headings: string[];
}) => {
  const itemsPerPage = 3; // Number of items to display per page (updated to 2)
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  // Calculate total number of pages based on data length and items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate index of the first and last item to display on current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice data array to get items for current page
  const currentPageData = data.slice(startIndex, endIndex);

  const handleDelete = (id: string) => {
    // Check if id is empty or undefined
    if (!id) {
      console.error("Invalid id value:", id);
      return;
    }

    console.log(id);
    console.log(typeof id);

    axios
      .delete("/api/menu", {
        params: {
          id,
        },
      })
      .then(() => {
        console.log("Successfully deleted");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  // Render the table content
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-md shadow-md">
        <table className="w-full border-collapse table-auto">
          {/* Render table headings */}
          <thead>
            <tr className="text-gray-700 bg-gray-200">
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-left"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          {/* Render table rows */}
          <tbody>
            {currentPageData.map((row, index) => (
              <tr
                key={row.id}
                className="transition duration-300 ease-in-out hover:bg-gray-100"
              >
                {/* Render row data */}
                <td className="px-4 py-2 text-sm text-gray-700">
                  {startIndex + index + 1}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.title}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.slug}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {row.submenus?.[0]?.title || ""}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {isNaN(new Date(row.createdAt).getTime()) ? (
                    <span>Invalid Date</span>
                  ) : (
                    <span>
                      {format(new Date(row.createdAt), "dd/MM/yy HH:mm")}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <div className="flex ">
                    <button
                      key={`edit_${row.id}`}
                      className="px-3 py-1 mr-2 text-white bg-green-500 rounded-md hover:bg-green- 600"
                      // onClick={() => handleEdit(row.id)}
                    >
                      <FiEdit size={16} />
                    </button>
                    <button
                      key={`delete_${row.id}`}
                      className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                      onClick={() => handleDelete(row.id)}
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Render pagination */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-100">
          <div>
            <span className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of{" "}
              {data.length} entries
            </span>
          </div>
          <div>
            <nav className="flex items-center">
              <button
                className={`${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                } bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-1 px-2 rounded-l-md`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={`page_${index + 1}`}
                  className={`${
                    currentPage === index + 1 ? "bg-blue-500 text-white" : ""
                  } bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-1 px-2`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className={`${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                } bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-1 px-2 rounded-r-md`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
