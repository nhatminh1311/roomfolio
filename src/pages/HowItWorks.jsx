import React from "react";
import Navbar from "../components/Navbar";

function HowItWorks() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">

        {/* HEADER */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Cách <span className="text-blue-500">roomfolio</span> Hoạt Động
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Chúng tôi không ghép phòng dựa trên cảm tính.
            Roomfolio sử dụng bài test khoa học để đo lường
            mức độ tương hợp về lối sống và tính cách.
          </p>
        </section>

        {/* SCIENCE SECTION */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                Nền tảng khoa học phía sau roomfolio
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Bài test dựa trên mô hình{" "}
                <a
                  href="https://bigfivepersonality.org/what-are-the-big-five-personality-traits/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink-500 hover:underline"
                >
                  Big Five Personality Traits
                </a>{" "}
                – hệ thống 5 nhóm đặc điểm tính cách được sử dụng rộng rãi
                trong nghiên cứu tâm lý học hiện đại.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Chúng tôi sử dụng{" "}
                <a
                  href="https://www.equalture.com/blog/situational-judgement-tests/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Situational Judgement Test (SJT)
                </a>{" "}
                để đánh giá hành vi thông qua các tình huống đời sống thực tế.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-3xl p-10 shadow-sm">
              <ul className="space-y-4 text-gray-700">
                <li>• Mức độ gọn gàng</li>
                <li>• Độ nhạy với tiếng ồn</li>
                <li>• Nhịp sinh hoạt (ngủ sớm / ngủ muộn)</li>
                <li>• Cách xử lý mâu thuẫn</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 5 STEP PROCESS */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
              Tìm Bạn Trọ Dễ Dàng Chỉ Với{" "}
              <span className="text-blue-600">5 Bước</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              {[
                {
                  number: "01",
                  title: "Bước 1. Tạo Hồ Sơ",
                  desc: "Người dùng điền thông tin cá nhân, nhu cầu thuê phòng và thói quen sinh hoạt để xây dựng hồ sơ lối sống."
                },
                {
                  number: "02",
                  title: "Bước 2. Làm Bài Kiểm Tra Tính Cách",
                  desc: "Hoàn thành bài đánh giá dựa trên Big Five và SJT để đo lường phong cách sống và hành vi thực tế."
                },
                {
                  number: "03",
                  title: "Bước 3. Khám Phá & Ghép Đôi",
                  desc: "Hệ thống phân tích và đề xuất roommate có mức độ tương hợp cao."
                },
                {
                  number: "04",
                  title: "Bước 4. Xem Điểm Tương Thích (%)",
                  desc: "Mỗi đề xuất đi kèm tỷ lệ phù hợp dựa trên thuật toán so sánh hành vi."
                },
                {
                  number: "05",
                  title: "Bước 5. Kết Nối & Gặp Mặt",
                  desc: "Người dùng trò chuyện, trao đổi và quyết định ở chung."
                }
              ].map((step, index) => {
                const isPink = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden p-8 rounded-3xl border transition duration-300 
                    ${isPink 
                      ? "bg-gradient-to-br from-pink-50 to-white border-pink-100 hover:shadow-pink-200/50 hover:shadow-xl"
                      : "bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-blue-200/50 hover:shadow-xl"
                    }
                    hover:-translate-y-1`}
                  >

                    {/* Number watermark */}
                    <span
                      className={`absolute bottom-4 right-6 text-7xl font-extrabold 
                      bg-gradient-to-r 
                      ${isPink ? "from-pink-200 to-pink-100" : "from-blue-200 to-blue-100"} 
                      bg-clip-text text-transparent opacity-40 select-none z-0`}
                    >
                      {step.number}
                    </span>

                    {/* Content */}
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-1.5 mb-6 rounded-full shadow-sm
                        ${isPink
                          ? "bg-gradient-to-r from-pink-500 to-pink-400"
                          : "bg-gradient-to-r from-blue-500 to-blue-400"
                        }`}
                      />

                      <h3 className="text-xl font-bold mb-3">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            <div className="mt-20 text-center">
              <button className="px-10 py-4 bg-pink-500 hover:bg-pink-600 transition text-white rounded-xl font-semibold shadow-md">
                Làm Bài Kiểm Tra Tính Cách Ngay
              </button>
            </div>

          </div>
        </section>

        {/* HIGHLIGHT BOX */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 border border-blue-200 rounded-3xl p-12 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Chúng tôi không nhận định bạn tốt hay xấu.
              </h3>

              <p className="text-gray-600 leading-relaxed">
                roomfolio đo mức độ tương hợp giữa hai người –
                vì sống chung phù hợp quan trọng hơn sự “hoàn hảo”.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default HowItWorks;