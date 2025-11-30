import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import AdminPagination from "../adminPagination/AdminPagination";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto dark:bg-[#10161E]">
        <Outlet />
        <AdminPagination/>
      </main>
    </div>
  );
}
