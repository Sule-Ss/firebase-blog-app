import React from "react";
import BlogCard from "../components/BlogCard";
import "./styles/dasboard.css";
import spinner from "../assests/spinner.gif"

const Dashboard = () => {
  return (
    <div>
      <h1 className="dasboardH1">~~DashBoard~~</h1>
      <BlogCard />
    </div>
  );
};

export default Dashboard;
