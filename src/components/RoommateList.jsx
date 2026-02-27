import { roommates } from "../data";

export default function RoommateList() {
  return (
    <section className="py-28">
      <div className="container text-center">

        <h2 className="text-3xl font-bold mb-4">
          Kết Nối Bạn Cùng Phòng Chuẩn Gu
        </h2>

        <p className="text-gray-600 mb-10">
          Để roomfolio dẫn lối như chiếc la bàn thần kỳ—tìm ngay những người bạn đồng hành hợp gu, hợp nhịp sống.
        </p>

        <div className="grid grid-cols-3 gap-14">
          {roommates.map((person, i) => (
            <div key={i}>
             <img
  src={person.image}
  className="w-[240px] h-[280px] object-cover rounded-[18px] mx-auto"
  alt=""
/>
              <h3 className="mt-4 font-medium">{person.name}</h3>
              <p className="text-sm text-gray-500 whitespace-pre-line">
                {person.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}