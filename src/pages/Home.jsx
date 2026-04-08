import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.svg";

export default function Home() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const init = async () => {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError || !userData?.user) {
        navigate("/login");
        return;
      }

      const { data: profileData, error: profileError } =
        await supabase
          .from("profiles")
          .select("first_name, last_name, ekyc_verified, ekyc_submitted")
          .eq("id", userData.user.id)
          .maybeSingle();

      if (!profileError && profileData) {
        setProfile(profileData);
      }

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

          <Link to="/home">
            <img src={logo} alt="roomfolio" className="h-[130px]" />
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
              {profile?.first_name
                ? profile.first_name.charAt(0)
                : "U"}
            </div>

            <div>
              <div className="font-medium">
                {profile
                  ? `${profile.last_name} ${profile.first_name}`
                  : "User"}
              </div>

              <div className="text-sm">
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

        </div>
      </div>

      {/* MAIN */}
      <div className="flex flex-col items-center justify-center mt-24">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Làm bài Trắc nghiệm Tính cách để "Matching" ngay
        </h1>

        <p className="text-gray-600 mb-10 text-center max-w-xl">
          Bạn hãy chọn 1 trong 2 nhu cầu dưới đây để bắt đầu bài test
        </p>

        <div className="flex gap-6 mb-10 flex-wrap justify-center">

          <button
            onClick={() =>
              setUserType(userType === "type1" ? "" : "type1")
            }
            className={`px-6 py-4 rounded-xl border w-80 text-left ${
              userType === "type1"
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold mb-3">
              1
            </div>

            <p className="text-sm">
              Đã có roommate
            </p>
          </button>

          <button
            onClick={() =>
              setUserType(userType === "type2" ? "" : "type2")
            }
            className={`px-6 py-4 rounded-xl border w-80 text-left ${
              userType === "type2"
                ? "bg-pink-500 text-white"
                : "bg-white"
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

        {!profile?.ekyc_verified && (
          <button
            onClick={() => navigate("/ekyc")}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
          >
            Xác thực tài khoản
          </button>
        )}

      </div>
    </div>
  );
}