import { FaBell, FaQuestionCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="bg-white flex justify-between items-center mb-6 px-6 py-2">
        <div></div>
        <div className="flex items-center">
          <button className="mr-4">
            <FaQuestionCircle className="h-6 w-6 text-gray-600" />
          </button>
          <button className="relative mr-4">
            <FaBell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              1
            </span>
          </button>
          <div className="flex items-center">
            <div className="rounded-full bg-purple-600 h-8 w-8 flex items-center justify-center text-white font-bold">
              KS
            </div>
            <div className="ml-2 text-gray-600 font-manrope">
              <span>Kunal Soni</span>
              <span className="text-sm block">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
