export default function AboutSection() {
  return (
    <section className="py-32">
      <div className="container flex items-center gap-20">

        <div className="max-w-xl">
          <h2 className="text-4xl font-bold leading-snug">
            Chúng tôi ở đây để thắp sáng những kết nối mang cảm giác như chính ngôi nhà của bạn.
          </h2>

          <p className="mt-6 text-gray-600">
            Sứ mệnh của chúng tôi là đan xen những nhịp sống, giúp bạn tìm thấy người bạn cùng phòng mang lại sự hòa hợp chân thật và khơi nguồn niềm vui mỗi ngày.
          </p>

          <button className="mt-6 border border-blue-600 text-blue-600 px-6 py-2 rounded-lg">
            Đăng ký
          </button>
        </div>

        <div className="flex gap-6">
          <img src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3"
               className="w-[280px] rounded-2xl shadow"/>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
               className="w-[280px] rounded-2xl shadow"/>
        </div>

      </div>
    </section>
  );
}