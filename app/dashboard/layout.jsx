import React from "react";
// import Header from "@/app/dashboard/_components/Header";
import Header from "./_components/Header"
function DashboardLayout({children}){
    return (
        <div>
            <Header/>
            {children}</div>
    )
}

export default DashboardLayout;
