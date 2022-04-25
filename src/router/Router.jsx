// import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />

          <Route element={<PrivateRouter />}>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/UpdateBlog/:id" element={<UpdateBlog />} />
            <Route path="/newblog" element={<NewBlog />} />
          </Route>

          {/* <Route
            path="/details/:id"
            element={
              currentUser ? <Details /> : <Navigate to="/login" replace />
            }
            //replace ile yol direkt değiştiriliyor.
          />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
