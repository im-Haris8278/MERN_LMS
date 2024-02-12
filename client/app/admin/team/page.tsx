"use client";
import React from "react";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtected";
import Headings from "@/app/utils/Heading";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import AllUsers from "@/app/components/Admin/Users/AllUsers";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Headings
          title="LMS - Admin"
          description="LMS is a Platform for Students to Learn and get help from Teachers"
          keywords="Programming, MERN, Redux, Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllUsers isTeam={true} />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
