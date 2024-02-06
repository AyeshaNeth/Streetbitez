import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contex/userContex";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AdminNavBar from "../components/adminNavBar";
import "./admin-dashbord.css";

export default function AdminDashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [totalUsers, setTotalUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }

    axios.get("/total-users")
      .then(({ data }) => {
        setTotalUsers(data.totalUsers);
        setIsLoading(false); // Set loading to false when data is received
      })
      .catch((error) => {
        console.error("Error fetching total users:", error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, [user, setUser]);

  const handleLogout = async () => {
    try {
      await axios.post("/logout");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>

      <AdminNavBar />

       

      <div className="bg-image"></div>
      <div className="content">
        <div className="black-box">
          <br></br>
          <Link to='/customerAdmin' className="vertical-text">Customer</Link>
          <div className="vertical-text">Event</div>
          <div className="vertical-text">Stall</div>
          <div className="vertical-text">Employee</div>
          <div className="vertical-text">Order</div>
          <div className="vertical-text">Delivery</div>
          <Link to='/invList' className="vertical-text">Inventory</Link>
          <div className="vertical-text">Finance</div>
        </div>
        <br></br>
        {!!user && (
          <div>
            <h2>Welcome {user.name}!</h2>
            <div className={`total-users-box${isLoading ? ' loading-text' : ''}`}>
              {isLoading ? (
                <p>Loading total users...</p>
              ) : (
                <p>Total Users: {totalUsers}</p>
              )}
            </div>
          </div>
        )}
        <br></br>
      </div>
    </div>
  );
}