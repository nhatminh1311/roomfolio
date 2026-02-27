import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 relative z-50">
      <div className="container flex items-center justify-between h-[80px]">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="roomfolio"
              className="h-[130px] object-contain"
            />
          </Link>
        </div>

        {/* CENTER — MENU */}
        <div className="flex items-center gap-12 text-[15px] font-medium">
          
          <Link to="/" className="relative text-black">
            Tìm Bạn Cùng Phòng
            <span className="absolute left-0 -bottom-[8px] w-full h-[2px] bg-blue-600 rounded"></span>
          </Link>

          <a className="text-gray-500 hover:text-black transition">
            Quy Tắc An Toàn
          </a>

          <a className="text-gray-500 hover:text-black transition">
            Cách Hoạt Động
          </a>

        </div>

        {/* RIGHT — AUTH */}
        <div className="flex items-center gap-6 text-[15px] font-medium">
          
          <Link
            to="/login"
            className="text-blue-600 hover:opacity-80 transition"
          >
            Đăng Nhập
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg shadow-sm"
          >
            Đăng Ký
          </Link>

        </div>

      </div>
    </nav>
  );
}