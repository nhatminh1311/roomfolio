import React from "react";
import Navbar from "../components/Navbar";

function Preview() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Khám Phá <span className="text-blue-500">roomfolio</span> Bản Full Preview
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Đây là bản prototype thiết kế trên Figma để bạn hình dung
            trải nghiệm người dùng sau khi sản phẩm hoàn thiện.
          </p>
        </section>

        {/* PROTOTYPE EMBED */}
        <section className="max-w-6xl mx-auto px-6 pb-24">

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">

            <iframe
              title="Roomfolio Prototype"
              className="w-full h-[800px]"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/8kfagFVRAOZPlSOv1VJPZL/Matching-Roomate-Website-Design?node-id=97-935&p=f&t=haaouNioIkkHQpOP-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=77%3A610"
              allowFullScreen
            ></iframe>

          </div>

          {/* BUTTON */}
          <div className="mt-12 text-center">
            <a
              href="https://www.figma.com/proto/8kfagFVRAOZPlSOv1VJPZL/Matching-Roomate-Website-Design?node-id=97-935&p=f&t=haaouNioIkkHQpOP-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=77%3A610"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-pink-500 hover:bg-pink-600 transition text-white rounded-xl font-semibold shadow-md"
            >
              Mở Prototype Toàn Màn Hình
            </a>
          </div>

        </section>

        {/* HIGHLIGHT */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 border border-blue-200 rounded-3xl p-12 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Đây chỉ là bản beta
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Phiên bản chính thức sẽ có đầy đủ chức năng như
                tạo hồ sơ, làm bài test, xác thực eKYC, ghép đôi và nhắn tin trực tiếp.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Preview;