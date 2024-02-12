"use client";
import React from "react";
import Headings from "../utils/Heading";
import AdminSidebar from "../components/Admin/Sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtected";
import DashboardHero from "../components/Admin/DashboardHero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Headings
          title={`Admin - LMS`}
          description="LMS is a platform for students to learn and get help from teachers"
          keywords="Programming, MERN, Typescript, Redux"
        />
        <div className="flex h-[100vh] overflow-hidden">
          <div className="1500px:w-[16px] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-full">
            <DashboardHero isDashboard={true} />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
