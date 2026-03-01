import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const baseClass =
    "relative font-medium transition-colors duration-200 pb-2";

  const inactiveClass =
    "text-gray-500 hover:text-black";

  const activeClass =
    "text-black after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:rounded";

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[80px]">

        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="roomfolio"
            className="h-[130px] object-contain"
          />
        </Link>

        {/* CENTER — MENU */}
        <div className="flex items-center gap-12 text-[15px]">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Tìm Bạn Cùng Phòng
          </NavLink>

          <NavLink
            to="/safety"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Quy Tắc An Toàn
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Cách Hoạt Động
          </NavLink>

<NavLink
  to="/preview"
  className={({ isActive }) =>
    `${baseClass} ${isActive ? activeClass : inactiveClass}`
  }
>
 Figma Prototype
</NavLink>

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