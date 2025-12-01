import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { adminRoutes } from "../admin_routes/adminRoutes";

export default function AdminPagination() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);

  const pathToPageMap = useMemo(() => ({
    "/admin/adminnn": 0,
    "/admin/adminnn/adminflights": 1,
    "/admin/adminnn/bookings": 2,
    "/admin/adminnn/users": 3,
    "/admin/adminnn/payments": 4,
  }), []);

  useEffect(() => {
    const newPage = pathToPageMap[location.pathname];
    if (newPage !== undefined && newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }, [location.pathname, currentPage, pathToPageMap]);

  const handlePageClick = useCallback((event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);

    const route = adminRoutes[selectedPage];
    if (route) {
      const path = selectedPage === 0 ? "" : route.path;
      navigate(path);
    }
  }, [navigate]);

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageCount={adminRoutes.length}
      pageRangeDisplayed={5}
      forcePage={currentPage}
      onPageChange={handlePageClick}
      containerClassName="flex justify-center mt-6 space-x-2 md:hidden"
      pageClassName="px-4 py-2 border rounded cursor-pointer bg-white text-black border-gray-300 dark:bg-[#10161E] dark:text-white dark:border-gray-600"
      activeClassName="bg-gradient-to-r from-gradient-violet to-gradient-peach text-white"
      previousClassName="px-4 py-2 border rounded cursor-pointer bg-white text-black border-gray-300 dark:bg-[#10161E] dark:text-white dark:border-gray-600"
      nextClassName="px-4 py-2 border rounded cursor-pointer bg-white text-black border-gray-300 dark:bg-[#10161E] dark:text-white dark:border-gray-600"
    />
  );
}