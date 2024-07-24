import React from "react";
import {
  FaHome,
  FaUser,
  FaRegFile,
  FaCog,
  FaEnvelope,
  FaClipboardList,
  FaQuestionCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../utils";

const Sidebar = () => {
  return (
    <div className="w-[20%] bg-white p-4 shadow-md border-r-2 border-solid border-light-grey">
      <div className="text-purple-600 text-2xl font-bold mb-8 font-manrope">
        Normal OS
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <NavLink
              to="/"
              href="#"
              onClick={() => scrollToTop()}
              className="flex items-center text-gray-600 hover:bg-purple-200 p-2 rounded font-manrope"
            >
              <FaHome className="h-5 w-5 mr-2" />
              Overview
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/agents"
              href="#"
              onClick={() => scrollToTop()}
              className="flex items-center text-gray-600 hover:bg-purple-200 p-2 rounded font-manrope"
            >
              <FaUser className="h-5 w-5 mr-2" />
              Agents
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/templates"
              href="#"
              onClick={() => scrollToTop()}
              className="flex items-center text-gray-600 hover:bg-purple-200 p-2 rounded font-manrope"
            >
              <FaRegFile className="h-5 w-5 mr-2" />
              Templates
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/tools-integrations"
              href="#"
              onClick={() => scrollToTop()}
              className="flex items-center text-gray-600 hover:bg-purple-200 p-2 rounded font-manrope"
            >
              <FaCog className="h-5 w-5 mr-2" />
              Tools & Integrations
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/sales-campaigns"
              href="#"
              onClick={() => scrollToTop()}
              className="flex items-center text-gray-600 hover:bg-purple-200 p-2 rounded font-manrope"
            >
              <FaClipboardList className="h-5 w-5 mr-2" />
              Sales Campaigns
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/support-center"
              href="#"
              onClick={() => scrollToTop()}
              className="flex items-center text-gray-600 hover:bg-purple-200 p-2 rounded font-manrope"
            >
              <FaQuestionCircle className="h-5 w-5 mr-2" />
              Support Center
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/messages"
              href="#"
              onClick={() => scrollToTop()}
              className="flex items-center text-gray-600 hover:bg-purple-200 p-2 rounded font-manrope"
            >
              <FaEnvelope className="h-5 w-5 mr-2" />
              Message
              <span className="ml-auto text-sm bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
                8
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
