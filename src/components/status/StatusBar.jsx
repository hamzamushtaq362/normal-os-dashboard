import React from "react";
import StatusCard from "./StatusCard";
import { RxCrossCircled } from "react-icons/rx";
import { TbCircleDotted } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { AiOutlineFileSearch } from "react-icons/ai";

function StatusBar() {
  const statusData = [
    {
      icon: <AiOutlineFileSearch size={28} className="text-purple-600" />,
      text: "Parsing",
      count: 2,
    },
    {
      icon: <RxCrossCircled size={28} className="text-purple-600" />,
      text: "Errors",
      count: 3,
    },
    {
      icon: <GrStatusGood size={28} className="text-purple-600" />,
      text: "Ready for Review",
      count: 19,
    },
    {
      icon: <TbCircleDotted size={28} className="text-purple-600" />,
      text: "Synced to TMS",
      count: 68,
    },
  ];

  return (
    <div className="w-full flex gap-4 mb-8">
      {statusData.map((data, index) => (
        <StatusCard key={index} {...data} />
      ))}
    </div>
  );
}

export default StatusBar;
