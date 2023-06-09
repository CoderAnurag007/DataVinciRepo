// src/pages/Dashboard.js
import React, { useContext } from "react";
import "./Dashboard.css";
import SidebarMenu from "../components/SidebarMenu";
import DataChart from "../components/DataChart";
import Profile from "../components/Profile";
import { AccountContext } from "../context/AccountContext";
const Dashboard = () => {
  const { sidebar, setsidebar } = useContext(AccountContext);
  return (
    <div
      style={{
        // gridTemplateColumns: !sidebar && "2fr 6fr 4fr",
        justifyContent: sidebar && "right",
        transition: "0.4s all",
        paddingRight: sidebar && "40px",
        gap: sidebar && "30px",
      }}
      className="dashboard"
    >
      <SidebarMenu />
      <DataChart />
      <Profile />
    </div>
  );
};

export default Dashboard;
