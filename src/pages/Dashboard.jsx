import React from "react";
import BlogCard from "../components/BlogCard";
import "./styles/dasboard.css";
import spinner from "../assests/spinner.gif"
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="home">
      <Header/>
      <BlogCard />
    </div>
  );
};

export default Dashboard;
