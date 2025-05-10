// function Thamaen() {
//     return <div

//     className="bg-black h-screen text-white ">ສະບາຍດີ</div>;
//   }
//   export default Thamaen
import { useState } from "react";

const images = [
  "https://media.oknation.net/uploads/201304/25/444809404.jpg",
  "https://f.tpkcdn.com/review-source/b0e30599-f344-6d7e-14c3-5dd5f084ff10.JPG",
  "https://ak-d.tripcdn.com/images/1mi1n2234akoy0h1d4F8F_W_640_0_R5_Q80.jpg?proc=source/trip",
  "https://ak-d.tripcdn.com/images/1mi5l2215edylv6fk24FA_W_640_0_R5_Q80.jpg?proc=source/trip",
  
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
        ຖ້ຳກອງລໍ ແມ່ນໜຶ່ງໃນສະຖານທີ່ທ່ອງທ່ຽວທາງທຳມະຊາດທີ່ສຳຄັນຂອງ ສປປ ລາວ
        ຕັ້ງຢູ່ໃນເມືອງຄູນຄຳ ແຂວງຄຳມ່ວນ.<br></br>
         ຖ້ຳນີ້ມີຄວາມຍາວປະມານ 7.5 ກິໂລແມັດ
        ແລະມີແມ່ນ້ຳໄຫຼຜ່ານຕະຫຼອດປີ.<br></br>
        ນັກທ່ອງທ່ຽວສາມາດນັ່ງເຮືອຜ່ານຖ້ຳໄປຍັງບ້ານນາຕານ ທີ່ຢູ່ອີກຝັ່ງໜຶ່ງໄດ້.<br></br>
        ພາຍໃນຖ້ຳມີຫິນງອກຫິນຍ້ອຍສວຍງາມ ແລະມີຫາດຊາຍກວ້າງ.<br></br>
        ການນັ່ງເຮືອຜ່ານຖ້ຳໃຊ້ເວລາປະມານ 3 ຊົ່ວໂມງ.<br></br>
         ຄ່າໃຊ້ຈ່າຍ: ຄ່າເຂົ້າຖ້ຳ: 5,000 ກີບ/ຄົນ <br></br>
         ຄ່າເຮືອ: 100,000 ກີບ/ລຳ (ນັ່ງໄດ້ 3 ຄົນ) <br></br>
        ຄ່າເຊົ່າໄຟສ່ອງທາງ: 5,000<br></br>
        ກີບ ຄ່າເຊົ່າຮອງທ້າວ: 5,000 ກີບ<br></br>
         ການເດີນທາງ: ຈາກເມືອງທ່າແຂກ
        ໄປຕາມຖະໜົນໝາຍເລກ 13 ແລ້ວເລີ້ຍວຂວາທີ່ແຍກຫຼັກຊາວ ໄປຕາມຖະໜົນໝາຍເລກ 8
        ທາງໄປເມືອງຫຼັກຊາວ. ກ່ອນເຖິງບ້ານນາຫິນປະມານ 3 ກິໂລແມັດ
        ຈະມີທາງແຍກຂວາມືມີປ້າຍບອກທາງໄປຖ້ຳກອງລໍ.<br></br>
        ລວມແລ້ວລະຍະທາງຈາກເມືອງທ່າແຂກໄປຖ້ຳກອງລໍປະມານ 200 ກິໂລແມັດ
        ໃຊ້ເວລາເດີນທາງປະມານ 4-5 ຊົ່ວໂມງ.<br></br>
         ຄຳແນະນຳ: ຄວນຫຼີກລ້ຽງການໄປໃນຊ່ວງເທດສະການ
        ເນື່ອງຈາກຈະມີນັກທ່ອງທ່ຽວຈຳນວນຫຼາຍ. ຄວນໃສ່ເຄື່ອງແຕ່ງກາຍທີ່ສະດວກ
        ແລະພ້ອມສໍາລັບການປຽກ ເນື່ອງຈາກບາງຊ່ວງຈະຕ້ອງລົງນ້ຳຫຼືຂຶ້ນຝັ່ງ. <br></br>
        ທີ່ພັກ:
        ມີໂຮມສະເຕຍໃນບ້ານກອງລໍ ແລະບ້ານນາຫິນ ລາຄາປະມານ 200 ບາດ/ຄົນ ລວມອາຫານເຊົ້າ
        ແລະອາຫານແລງ.
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
