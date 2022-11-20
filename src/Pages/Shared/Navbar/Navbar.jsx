import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("successfully logout");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="font-semibold" to="/home">
          Home
        </Link>
      </li>
      <li tabIndex={0}>
        <Link className="font-semibold justify-between" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/appointment">
          Appointment
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/contact_us">
          Contact Us
        </Link>
      </li>
      <div>
        {user?.uid ? (
          <>
            <div className="flex justify-between lg:items-center flex-col lg:flex-row">
              <li>
                <Link className="font-semibold" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/reviews">
                  Reviews
                </Link>
              </li>
              <li>
                <button onClick={handleLogOut} className="font-semibold">
                  Log Out
                </button>
              </li>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="flex justify-between lg:items-center flex-col lg:flex-row">
              <li>
                <Link className="font-semibold" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/register">
                  Register
                </Link>
              </li>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );

  return (
    <div className="">
      <div className="navbar  max-w-[1400px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end flex md:hidden">
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
