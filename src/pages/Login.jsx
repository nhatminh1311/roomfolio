import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.svg";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Đăng nhập thành công 🎉");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      {/* HEADER */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto h-[80px] flex items-center px-0">
          <Link to="/">
            <img src={logo} alt="roomfolio" className="h-[130px]" />
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1300px] mx-auto px-5 py-5 grid grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[32px] font-bold mb-4">
            Chào mừng quay lại 👋
          </h2>
          <p className="text-gray-600 text-[16px] leading-[26px] max-w-[600px]">
            Đăng nhập để tiếp tục hành trình tìm bạn cùng phòng lý tưởng.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white p-10 rounded-2xl shadow-md">
          <div className="space-y-6">

            <div>
              <label className="block text-sm mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-medium">
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                placeholder="Nhập mật khẩu của bạn"
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Quên mật khẩu?
              </Link>

              <Link
                to="/signup"
                className="text-gray-600 hover:underline"
              >
                Chưa có tài khoản?
              </Link>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Đăng nhập
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}