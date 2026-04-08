import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.svg";

export default function Home() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [userType, setUserType] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError || !userData?.user) {
        navigate("/login");
        return;
      }

      // user hiện tại
      const { data: profileData } = await supabase
        .from("profiles")
        .select("first_name, last_name, ekyc_verified, ekyc_submitted")
        .eq("id", userData.user.id)
        .maybeSingle();

      if (profileData) setProfile(profileData);

      // danh sách user khác
      const { data: usersData } = await supabase
        .from("profiles")
        .select("id, first_name, last_name, gender, location, school_company, ekyc_verified")
        .neq("id", userData.user.id);

      if (usersData) setUsers(usersData);

      setLoading(false);
    };

    init();
  }, [navigate]);

  const openForm = () => {
    if (!userType) return;

    const links = {
      type1: "https://forms.gle/FSGzF6wzkm4qfYkb7",
      type2: "https://forms.gle/A56xjnQ8tq5bH7xc8",
    };

    window.open(links[userType], "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8]">

      {/* HEADER */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto h-[80px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/home">
            <img src={logo} alt="roomfolio" className="h-[130px]" />
          </Link>

          {/* MENU */}
          <div className="flex items-center gap-10 text-[15px] font-medium">
            <button onClick={() => navigate("/home")} className="text-gray-600 hover:text-black">
              Trang chủ
            </button>

            <button onClick={() => navigate("/ekyc")} className="text-gray-600 hover:text-black">
              Xác thực eKYC
            </button>

            <button onClick={() => navigate("/how-it-works")} className="text-gray-600 hover:text-black">
              Cách hoạt động
            </button>
          </div>

          {/* USER + DROPDOWN */}
          <div className="relative">
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                {profile?.first_name ? profile.first_name.charAt(0) : "U"}
              </div>

              <div>
                <div className="font-medium">
                  {profile
                    ? `${profile.last_name} ${profile.first_name}`
                    : "User"}
                </div>

                <div className="text-xs mt-1">
                  {!profile?.ekyc_submitted && (
                    <span className="text-red-500">Chưa xác thực</span>
                  )}
                  {profile?.ekyc_submitted && !profile?.ekyc_verified && (
                    <span className="text-yellow-500">Đang chờ duyệt</span>
                  )}
                  {profile?.ekyc_verified && (
                    <span className="text-green-600">Đã xác thực</span>
                  )}
                </div>
              </div>
            </div>

            {openMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md">
                <button
                  onClick={() => navigate("/home")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Trang cá nhân
                </button>

                <button
                  onClick={async () => {
                    await supabase.auth.signOut();
                    navigate("/login");
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* MAIN */}
      <div className="flex flex-col items-center justify-center mt-24">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Làm bài Trắc nghiệm Tính cách để "Matching" ngay 💙
        </h1>

        <p className="text-gray-600 mb-10 text-center max-w-xl">
          Bạn hãy chọn 1 trong 2 nhu cầu dưới đây để bắt đầu bài test tính cách nhé ;)
        </p>

        <div className="flex gap-6 mb-10 flex-wrap justify-center">

          {/* TYPE 1 */}
          <button
            onClick={() =>
              setUserType(userType === "type1" ? "" : "type1")
            }
            className={`px-6 py-4 rounded-xl border w-80 text-left ${
              userType === "type1"
                ? "bg-blue-500 text-white"
                : "bg-white hover:shadow-md"
            }`}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold mb-3">
              1
            </div>
            <p className="text-sm">
              Đã có roommate rùi
            </p>
          </button>

          {/* TYPE 2 */}
          <button
            onClick={() =>
              setUserType(userType === "type2" ? "" : "type2")
            }
            className={`px-6 py-4 rounded-xl border w-80 text-left ${
              userType === "type2"
                ? "bg-pink-500 text-white"
                : "bg-white hover:shadow-md"
            }`}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold mb-3">
              2
            </div>
            <p className="text-sm">
              Tìm roommate
            </p>
          </button>

        </div>

        {userType && (
          <button
            onClick={openForm}
            className="bg-blue-600 text-white px-8 py-3 rounded-full"
          >
            Bắt đầu
          </button>
        )}

        {/* ROOMMATE LIST */}
        <div className="mt-20 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Danh sách roommate
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {users.map((u) => (
              <div key={u.id} className="bg-white p-4 rounded-xl shadow border">

                <div className="flex justify-between">
                  <div className="font-semibold">
                    {u.last_name} {u.first_name}
                  </div>

                  {u.ekyc_verified && (
                    <span className="text-green-600 text-xs">
                      ✔ Verified
                    </span>
                  )}
                </div>

                <div className="text-sm text-gray-600 mt-2">
                  {u.gender} • {u.location}
                </div>

                <div className="text-sm text-gray-500">
                  {u.school_company}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}