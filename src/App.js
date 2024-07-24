import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/overview/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import ComingSoon from "./pages/ComingSoon";
import Chatbot from "./components/chat/Chatbot";
import { useState } from "react";
import { MdSupportAgent } from "react-icons/md";
import Agent from "./pages/Agent";

function App() {
  // chatbot
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <Router>
      <div className="flex min-h-[100vh] bg-gray-100">
        {/* h-screen */}
        <Sidebar />
        <div className="w-[80%]">
          <Header />
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/agents" element={<Agent />} />
              <Route path="/templates" element={<ComingSoon />} />
              <Route path="/tools-integrations" element={<ComingSoon />} />
              <Route path="/sales-campaigns" element={<ComingSoon />} />
              <Route path="/support-center" element={<ComingSoon />} />
              <Route path="/messages" element={<ComingSoon />} />
            </Routes>
          </div>
        </div>
        {/* Chatbot Button */}
        <button
          className="chatbot-button shadow-xl  flex justify-center items-center gap-2 font-manrope"
          onClick={toggleChatbot}
        >
          <MdSupportAgent size={20} /> Support
        </button>

        {/* Chatbot Component */}
        {isChatbotOpen && <Chatbot />}
      </div>
    </Router>
  );
}

export default App;
