import a1 from "../assets/hero/a1.png";
import a2 from "../assets/hero/a2.png";
import a3 from "../assets/hero/a3.png";
import a4 from "../assets/hero/a4.png";
import room1 from "../assets/hero/room1.png";
import room2 from "../assets/hero/room2.png";
import room3 from "../assets/hero/room3.png";

export default function Hero() {
  return (
    <section className="relative bg-[#f3f3f3] pt-[40px] pb-[80px]">
      <div className="container text-center relative">

        {/* ===== IMAGE COLLAGE ===== */}
       <div className="relative h-[230px] mb-[120px]">

  {/* LEFT TOP SMALL */}
  <img
    src={room1}
    className="absolute left-[40px] top-[10px] w-[120px] h-[180px] object-cover rounded-[12px]"
  />

  {/* LEFT BOTTOM SMALL */}
  <img
    src={room2}
    className="absolute left-[60px] top-[230px] w-[150px] h-[200px] object-cover rounded-[12px]"
  />

  {/* BIG 1 */}
  <img
    src={a1}
    className="absolute left-[230px] top-[30px] w-[210px] h-[280px] object-cover rounded-[12px]"
  />

  {/* BIG 2 */}
  <img
    src={a4}
    className="absolute left-[480px] top-[0px] w-[210px] h-[280px] object-cover rounded-[12px]"
  />

  {/* BIG 3 */}
  <img
    src={a3}
    className="absolute left-[730px] top-[30px] w-[210px] h-[280px] object-cover rounded-[12px]"
  />

  {/* RIGHT TOP SMALL */}
  <img
    src={a2}
    className="absolute right-[60px] top-[20px] w-[130px] h-[190px] object-cover rounded-[12px]"
  />

  {/* RIGHT BOTTOM SMALL */}
  <img
    src={room3}
    className="absolute right-[80px] top-[240px] w-[160px] h-[200px] object-cover rounded-[12px]"
  />

</div>

        {/* ===== HEADLINE ===== */}
        <h1 className="text-[64px] font-extrabold leading-[78px] tracking-[-1px]">
          <span className="block text-[#E54898]">
            DỪNG LẠC LỐI
          </span>

          <span className="block text-[#2E6DEB] mt-3">
            BẮT ĐẦU KẾT NỐI
          </span>
        </h1>

        {/* ===== SUBTITLE ===== */}
        <p className="mt-6 text-[18px] text-gray-600 leading-[28px] max-w-[620px] mx-auto">
          Kết nối liền tay với người hợp gu và nhịp sống của bạn.
          Người bạn cùng phòng lý tưởng đang chờ bạn đó ;)
        </p>

        {/* ===== BUTTON ===== */}
        <button className="mt-10 bg-[#E54898] hover:bg-[#d43e88] transition text-white px-8 py-3 rounded-xl shadow-md">
          Kết Nối Ngay
        </button>

      </div>
    </section>
  );
}