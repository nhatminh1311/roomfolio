export default function SafetySection() {
  return (
    <section className="py-30">
      <div className="container bg-[#d2e7ff] rounded-3xl p-20 flex gap-20 items-center">

        <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659"
             className="w-[450px] rounded-2xl"/>

        <div>
          <h3 className="text-3xl font-bold">
            Sống chung vui vẻ, an toàn là trên hết! 🛡️
          </h3>

          <p className="mt-6 text-gray-700 max-w-md">
            Chúng tôi tin rằng sự kết nối chỉ thực sự thăng hoa khi bạn cảm thấy an toàn. Quy Tắc An Toàn không phải là những điều luật khô khan, mà là người bạn đồng hành giúp bạn tự tin tìm kiếm và gắn bó với người bạn cùng phòng lý tưởng. Hãy cứ là chính mình, việc bảo vệ không gian sống của bạn đã có chúng tôi lo.
          </p>

          <button className="mt-6 px-5 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-600 hover:text-white transition">
            Đọc Quy Tắc An Toàn
          </button>
        </div>

      </div>
    </section>
  );
}