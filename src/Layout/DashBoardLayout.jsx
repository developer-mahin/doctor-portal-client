import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-gray-200">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content rounded">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className="font-semibold" to="/dashboard">
                ALL Appointment
              </Link>
            </li>
            <div>
              {isAdmin && (
                <>
                  <li>
                    <Link className="font-semibold" to="/dashboard/users">
                      All Users
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold" to="/dashboard/add-doctor">
                      Add Doctor
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold"
                      to="/dashboard/manage-doctors"
                    >
                      Manage Doctors
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoardLayout;
