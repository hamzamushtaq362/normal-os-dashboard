import React from "react";
import Welcome from "./Welcome";
import UserTable from "../user/UserTable";

const Dashboard = () => {
  return (
    <>
      <Welcome />
      <div className="flex-1">
        <UserTable />
        {/* <Secondarytable /> */}
      </div>
    </>
  );
};

export default Dashboard;
