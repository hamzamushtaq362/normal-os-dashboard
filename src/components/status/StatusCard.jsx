import React from "react";

function StatusCard({ icon, text, count }) {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "16px",
      }}
      className="w-[25%] flex flex-col items-center justify-center text-black rounded-md p-4"
    >
      <div className="text-2xl">{icon}</div>
      <div>{text}</div>
      <div className="text-2xl font-bold">{count}</div>
    </div>
  );
}

export default StatusCard;
