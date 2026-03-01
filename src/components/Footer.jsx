export default function Footer() {
  return (
    <footer className="bg-[#e8d6df] py-20 mt-20">
      <div className="container grid grid-cols-4 gap-16 text-sm text-gray-800">
        
        {/* Logo + Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-blue-600 text-3xl font-bold"> </div>
            <span className="text-blue-600 font-bold text-xl">roomfolio</span>
          </div>
         

 <p>Công ty TNHH Roomfolio</p>
          <p>Địa chỉ công ty: 15 D5, P. Thạnh Mỹ Tây, TP.HCM</p>
          <p>Email hỗ trợ: roomfolio6767@gmail.com</p>
          <p>Hotline: +84 905 765 339</p>
        </div>

        {/* Thông tin chung */}
        <div>
          <h4 className="font-semibold mb-4">Thông tin chung</h4>
          <ul className="space-y-2">
            <li>Về chúng tôi (About Us)</li>
            <li>Liên hệ (Contact)</li>
            <li>Blog / Tin tức (Blog/News)</li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div>
          <h4 className="font-semibold mb-4">Hỗ trợ người dùng</h4>
          <ul className="space-y-2">
            <li>Câu hỏi thường gặp (FAQ)</li>
            <li>Hướng dẫn sử dụng (How it works / User Guide)</li>
            <li>Chính sách bảo mật (Privacy Policy)</li>
            <li>Điều khoản sử dụng (Terms of Service)</li>
          </ul>
        </div>

        {/* Chức năng chính */}
        <div>
          <h4 className="font-semibold mb-4">Chức năng chính</h4>
          <ul className="space-y-2">
            <li>Tìm bạn cùng phòng (Find a Roommate)</li>
            <li>Đăng tin phòng (Post a Room)</li>
            <li>Đăng nhập / Đăng ký (Login / Sign Up)</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs mt-16 text-gray-600">
        Copyright © 2026 Roomfolio. All rights reserved.
      </div>
    </footer>
  );
}