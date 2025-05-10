// function Thamaen() {
//     return <div

//     className="bg-black h-screen text-white ">ສະບາຍດີ</div>;
//   }
//   export default Thamaen
import { useState } from "react";

const images = [
  "https://ak-d.tripcdn.com/images/1mi542215g187t55sD62E_W_640_0_R5_Q80.jpg?proc=source/trip",
  "https://ak-d.tripcdn.com/images/1i61k22346xpqzrox55B0_W_640_0_R5_Q80.jpg?proc=source/trip",
  "https://ak-d.tripcdn.com/images/1mi2a2234c9ye55ao466D_W_640_0_R5_Q80.jpg?proc=source/trip",
  "https://ak-d.tripcdn.com/images/1i6172215ca9wtjnk6DCC_W_640_0_R5_Q80.jpg?proc=source/trip",
  "https://ak-d.tripcdn.com/images/1i64222348h08z1z487A4_W_640_0_R5_Q80.jpg?proc=source/trip",
];

export default function SimpleSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="grid md:grid-cols-3 p-4 gap-4 bg-gray-200 h-screen">
      <span className="text-center pt-20 pl-4 md:pl-28 text-xl">
        {" "}
        ຂໍ້ມູນເບື້ອງຕົ້ນຂອງ ບ້ານທ່າຝຮັ່ງ ວັງສີຄາມ ເມືອງທ່າແຂກ ແຂວງຄຳມ່ວນ:<br></br>
         🏡
        ຂໍ້ມູນທົ່ວໄປ: ຊື່ເຕັມ: ບ້ານທ່າຝຮັ່ງ ຢູ່ໃນໜ່ວຍບ້ານ ວັງສີຄາມ, ເມືອງທ່າແຂກ ແຂວງຄຳມ່ວນ<br></br>
         ປະເພດບ້ານ: ບ້ານຕິດແມ່ນ້ຳຂອງ ແລະເປັນບ້ານໃນເຂດເມືອງຫຼວງ<br></br>
         ເປັນບ້ານທີ່ມີປະຫວັດສາດຍາວນານ ແລະ ເຄີຍເປັນສູນການຄ້າແລະຕິດຕໍ່ກັບຊາວຝຣັ່ງໃນອະດີດ ເປັນຈຸດທ່ອງທ່ຽວ:
        ໃກ້ກັບສະຖານທີ່ທ່ອງທ່ຽວສຳຄັນເຊັ່ນ ວັດທ່າຄວາຍ, ແມ່ນ້ຳຂອງ, ແລະຕະຫຼາດຊາຍແດນ<br></br>
        📍 ທີ່ຕັ້ງ: ບ້ານທ່າຝຮັ່ງ ຕັ້ງຢູ່ທາງດ້ານໃຕ້ຂອງເມືອງທ່າແຂກ
        ຢູ່ໃກ້ກັບຂົວມິດຕະພາບໄທ-ລາວ ແຫ່ງທີ 3 ຂັ້ນຕົ້ນເປັນບ້ານຫຼວງ
        ມີປະຊາກອນພັກອາໄສຈຳນວນຫຼາຍ ແລະການຄ້າເຕີບໂຕຢ່າງຕໍ່ເນື່ອງ<br></br> 
        🛶
        ກິດຈະກຳນ່າສົນໃຈ: ຂື້ນເຮືອຂ້າມແມ່ນ້ຳຂອງໄປບໍ່ໄກແຂວງນະຄອນພະນົມ (ປະເທດໄທ)
        ຊົມວິວກາງແມ່ນ້ຳຂອງ ໃນແຖບໂຮງແຮມທ່າຝຮັ່ງຫຼາຍໆ
        ຮັບປະທານອາຫານທີ່ຕະຫຼາດທ່າຝຮັ່ງຍາມແລງ ເຊັ່ນ ຂົ້ມເຂົ້າປີ້ງ, ຂົ້ມໝູ່ໃສ່ໄຂ່,
        ແລະຂອງກິນທ້ອງຖິ່ນ
      </span>
      <div className="relative w-full col-span-2 p-4 flex justify-center items-center">
        <img
          src={images[current]}
          className="w-full md:w-[600px] h-[600px] object-cover rounded-xl"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 md:left-60 -translate-y-1/2 bg-white/50 rounded-full p-2 cursor-pointer"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 md:right-60 -translate-y-1/2 bg-white/50 rounded-full p-2 cursor-pointer"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
