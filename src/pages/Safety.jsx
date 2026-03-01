import React from "react";
import Navbar from "../components/Navbar";
import {
  Home,
  Smartphone,
  Lock,
  MessageCircle,
  FileText,
  AlertTriangle,
} from "lucide-react";

function Safety() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">

        {/* HEADER (giữ layout cũ) */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Quy Tắc <span className="text-pink-500">An Toàn</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            roomfolio ưu tiên sự an toàn và tôn trọng lẫn nhau.
            Những nguyên tắc dưới đây giúp bạn tìm roommate một cách an tâm.
          </p>
        </section>

        {/* PINK BLOCK */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-pink-200 rounded-3xl p-12">

            <div className="grid md:grid-cols-3 gap-14">

              {/* Rule 1 */}
              <div className="flex gap-4">
                <Home size={36} />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Gặp gỡ ở nơi công cộng trước khi quyết định
                  </h3>
                  <p>
                    Luôn hẹn gặp tại quán cà phê hoặc không gian chung
                    trước khi đồng ý ở cùng.
                  </p>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="flex gap-4">
                <Smartphone size={36} />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Thông báo cho người thân khi đi xem phòng
                  </h3>
                  <p>
                    Chia sẻ lịch hẹn và địa điểm với bạn bè hoặc gia đình
                    để đảm bảo an toàn.
                  </p>
                </div>
              </div>

              {/* Rule 3 */}
              <div className="flex gap-4">
                <Lock size={36} />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Giữ kín thông tin cá nhân nhạy cảm
                  </h3>
                  <p>
                    Không chia sẻ số tài khoản, giấy tờ tùy thân
                    hoặc thông tin tài chính quá sớm.
                  </p>
                </div>
              </div>

              {/* Rule 4 */}
              <div className="flex gap-4">
                <MessageCircle size={36} />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Thảo luận rõ ràng về quy tắc sinh hoạt
                  </h3>
                  <p>
                    Trao đổi trước về chi phí, giờ giấc và thói quen
                    sinh hoạt để tránh mâu thuẫn.
                  </p>
                </div>
              </div>

              {/* Rule 5 */}
              <div className="flex gap-4">
                <FileText size={36} />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Luôn có hợp đồng bằng văn bản
                  </h3>
                  <p>
                    Ký hợp đồng thuê nhà rõ ràng để bảo vệ quyền lợi
                    của cả hai bên.
                  </p>
                </div>
              </div>

              {/* Rule 6 */}
              <div className="flex gap-4">
                <AlertTriangle size={36} />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Báo cáo hành vi đáng ngờ
                  </h3>
                  <p>
                    Nếu phát hiện dấu hiệu lừa đảo hoặc không minh bạch,
                    hãy báo cáo ngay cho chúng tôi tại roomfolio6767@gmail.com.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* HIGHLIGHT BOX (giữ lại) */}
          <div className="mt-20 bg-gradient-to-r from-pink-50 to-blue-50 border border-blue-200 rounded-3xl p-12 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              An toàn là trách nhiệm chung
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              roomfolio hỗ trợ kết nối, nhưng quyết định cuối cùng vẫn thuộc về bạn.
              Hãy luôn ưu tiên sự an toàn, giao tiếp rõ ràng và tôn trọng lẫn nhau.
            </p>
          </div>

        </section>

      </div>
    </>
  );
}

export default Safety;