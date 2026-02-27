export default function PricingSection() {
  return (
    <section className="py-30">
      <div className="container bg-[#d2e7ff] rounded-3xl p-20 flex gap-20 items-center">

        <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659"
             className="w-[450px] rounded-2xl"/>

        <div>
          <h3 className="text-3xl font-bold">
            Bạn trọ hợp gu, chi phí hợp lý
          </h3>

          <p className="mt-6 text-gray-700 max-w-md">
            Chúng tôi tin rằng việc tìm bạn cùng phòng không chỉ là ghép đôi đúng vibe, mà còn phải vừa túi tiền. Sứ mệnh của chúng tôi là mang đến những lựa chọn sống chung dễ chịu, giúp bạn an tâm về chi phí mà vẫn tận hưởng sự đồng điệu và niềm vui mỗi ngày.
          </p>

          <button className="mt-6 px-5 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-600 hover:text-white transition">
            Tìm Hiểu Cách Chúng Tôi Hoạt Động
          </button>
        </div>

      </div>
    </section>
  );
}