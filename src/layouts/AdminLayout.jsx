import React from "react";

import { Sidebar } from "../components/Sidebar/Sidebar";

import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
            <Sidebar/>
            <div className="xl:col-span-5 p-4">
                <div><Outlet/></div>
            </div>

            
            
        </div>
    )
}