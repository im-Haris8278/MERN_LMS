"use client";
import React, { FC, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Headings from "./utils/Heading";
import Courses from "./components/Route/Courses";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div className="h-[100vh] overflow-y-hidden">
      <Headings
        title="LMS"
        description="LMS is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Typescript, Redux"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Courses />
    </div>
  );
};

export default Page;
