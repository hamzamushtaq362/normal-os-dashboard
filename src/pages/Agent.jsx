import React from "react";
import StatusBar from "../components/status/StatusBar";
import UserTable from "../components/user/UserTable";
import Secondarytable from "../components/user/Secondarytable";

export default function Agent() {
  return (
    <>
      <StatusBar />
      {/* <UserTable /> */}
      <Secondarytable />
    </>
  );
}
