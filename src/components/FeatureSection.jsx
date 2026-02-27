export default function FeatureSection() {
  return (
    <section className="py-[140px]">
      <div className="container flex items-center gap-[80px]">
        
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          className="w-[750px] rounded-3xl shadow-lg"
        />

        <div className="max-w-[380px]">
          
          <h3 className="text-[24px] font-bold leading-[32px]">
            Hiểu mình rõ, tìm bạn chuẩn
          </h3>

          <p className="mt-4 text-[14px] text-gray-500 leading-[24px]">
            Đừng để việc tìm roommate là một trò chơi may rủi. Qua những câu hỏi thú vị, chúng tôi giúp bạn định hình "chân dung sống" để kết nối chính xác với những người bạn cùng phòng phù hợp. Khi hiểu rõ bản thân, bạn sẽ dễ dàng tìm thấy một không gian sống chung thoải mái và tự do là chính mình.
          </p>

          <button className="mt-6 px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Thử Ngay Bài Kiểm Tra DNA Lifestyle
          </button>

        </div>
      </div>
    </section>
  );
}