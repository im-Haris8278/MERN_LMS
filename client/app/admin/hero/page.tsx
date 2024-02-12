"use client";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtected";
import Headings from "@/app/utils/Heading";
import React from "react";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import EditHero from "../../components/Admin/Customization/EditHero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Headings
          title="LMS - Admin"
          description="LMS is a platform for students to learn and get help from teachers"
          keywords="Programming, MERN, Typescript, Redux"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
