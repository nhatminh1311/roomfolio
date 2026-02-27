import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.svg";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",   // TÊN
    lastName: "",    // HỌ
    email: "",
    phone: "",
    school_company: "",
    job: "",
    location: "",
    gender: "",
    day: "",
    month: "",
    year: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    // 1️⃣ Tạo user auth
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (!data?.user) {
      alert("Không tạo được user");
      return;
    }

    // Format birth_date chuẩn yyyy-mm-dd
    const birthDate = `${form.year}-${form.month.padStart(2, "0")}-${form.day.padStart(2, "0")}`;

    // 2️⃣ Insert profile align đúng schema
    const { error: profileError } = await supabase
      .from("profiles")
      .insert([
        {
          id: data.user.id,
          last_name: form.lastName,       // HỌ
          first_name: form.firstName,     // TÊN
          email: form.email,
          phone: form.phone,
          gender: form.gender,
          birth_date: birthDate,
          school_company: form.school_company,
          job: form.job,
          location: form.location,
        },
      ]);

    if (profileError) {
      alert(profileError.message);
      return;
    }

    alert("Đăng ký thành công 🎉");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto h-[80px] flex items-center px-0">
          <Link to="/">
            <img src={logo} alt="roomfolio" className="h-[130px]" />
          </Link>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-5 py-5 grid grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-[32px] font-bold mb-4">
            Tạo Tài Khoản
          </h2>
          <p className="text-gray-600 text-[16px] leading-[26px] max-w-[600px]">
            Bắt đầu hành trình tìm bạn cùng phòng phù hợp với bạn.
          </p>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-md">
          <div className="grid grid-cols-2 gap-6">

            {/* HỌ */}
            <div>
              <label className="block text-sm mb-2 font-medium">Họ</label>
              <input
                name="lastName"
                placeholder="Nguyễn"
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

            {/* TÊN */}
            <div>
              <label className="block text-sm mb-2 font-medium">Tên</label>
              <input
                name="firstName"
                placeholder="Minh Anh"
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-2 font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-2 font-medium">
                Số điện thoại
              </label>
              <input
                name="phone"
                placeholder="0987 654 321"
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-3 font-medium">
                Ngày sinh
              </label>
              <div className="grid grid-cols-3 gap-4">
                <input
                  name="day"
                  placeholder="DD"
                  onChange={handleChange}
                  className="bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
                />
                <input
                  name="month"
                  placeholder="MM"
                  onChange={handleChange}
                  className="bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
                />
                <input
                  name="year"
                  placeholder="YYYY"
                  onChange={handleChange}
                  className="bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-3 font-medium">
                Giới tính
              </label>
              <div className="flex gap-4">
                {["Nam", "Nữ", "Khác"].map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() =>
                      setForm((prev) => ({ ...prev, gender: g }))
                    }
                    className={`px-6 py-2 rounded-full text-sm ${
                      form.gender === g
                        ? "bg-blue-600 text-white"
                        : "bg-[#EAF2FF]"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-2 font-medium">
                Trường học / Công ty
              </label>
              <input
                name="school_company"
                placeholder="FTU, RMIT, UEH, UEF..."
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-2 font-medium">
                Nghề Nghiệp
              </label>
              <input
                name="job"
                placeholder="Sinh viên, Kế toán, IT..."
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-2 font-medium">
                Khu Vực Sinh Sống
              </label>
              <input
                name="location"
                placeholder="Phường Thạnh Mỹ Tây, Phường Hòa Hưng..."
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
                placeholder="Tối thiểu 6 ký tự"
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-medium">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                onChange={handleChange}
                className="w-full bg-[#EAF2FF] rounded-full px-5 py-3 outline-none"
              />
            </div>

          </div>

          <div className="flex justify-end gap-4 mt-10">
            <Link
              to="/"
              className="px-6 py-2 rounded-full bg-pink-500 text-white"
            >
              Quay lại Trang Chủ
            </Link>

            <button
              onClick={handleSignup}
              className="px-6 py-2 rounded-full bg-blue-600 text-white"
            >
              Tạo tài khoản
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}