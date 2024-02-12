"use client";
import React from "react";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import Headings from "@/app/utils/Heading";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import AllInvoices from "@/app/components/Admin/Order/AllInvoices";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Headings
        title="LMS - Admin"
        description="LMS is a Platform for Students to Learn and get help from Teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <AllInvoices />
        </div>
      </div>
    </div>
  );
};

export default page;
