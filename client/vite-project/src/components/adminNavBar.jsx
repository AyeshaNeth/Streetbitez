import { useContext } from "react";
import { UserContext } from "../../contex/userContex";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./adminNavBar.css"


export default function AdminNavBar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        await axios.post("/logout");
        setUser(null);
        navigate("/login"); // Redirect to the login page
        toast.success("Logout successful"); // Show success message
      } catch (error) {
        console.log(error);
        toast.error("Failed to logout"); // Show error message
      }
    }
  };

  return (
    <div className="menu-bar">
      
      <Link to="/admin-dashbord">Dashboard</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
