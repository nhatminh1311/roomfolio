import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function EKYC() {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!frontImage || !backImage) {
      alert("Vui lòng upload đủ 2 mặt CCCD");
      return;
    }

    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Bạn chưa đăng nhập");
      setLoading(false);
      return;
    }

    const userId = user.id;

    // Upload mặt trước
    const { error: frontError } = await supabase.storage
      .from("ekyc")
      .upload(`${userId}/front.jpg`, frontImage, { upsert: true });

    if (frontError) {
      alert(frontError.message);
      setLoading(false);
      return;
    }

    // Upload mặt sau
    const { error: backError } = await supabase.storage
      .from("ekyc")
      .upload(`${userId}/back.jpg`, backImage, { upsert: true });

    if (backError) {
      alert(backError.message);
      setLoading(false);
      return;
    }

    // Update DB
    await supabase
      .from("profiles")
      .update({
        ekyc_submitted: true,
        ekyc_verified: false,
        ekyc_submitted_at: new Date(),
      })
      .eq("id", userId);

    alert("Upload thành công");
    setLoading(false);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex justify-center items-center">
      <div className="bg-white p-10 rounded-2xl shadow-md w-[500px]">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Xác thực eKYC
        </h2>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            CCCD mặt trước
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFrontImage(e.target.files[0])}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">
            CCCD mặt sau
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setBackImage(e.target.files[0])}
          />
        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-full"
        >
          {loading ? "Đang upload..." : "Xác thực"}
        </button>

      </div>
    </div>
  );
}