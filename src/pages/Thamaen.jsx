// function Thamaen() {
//     return <div

//     className="bg-black h-screen text-white ">ສະບາຍດີ</div>;
//   }
//   export default Thamaen
import { useState } from "react";

const images = [
  "https://cms.dmpcdn.com/ugcarticle/2023/08/07/fb44f6d0-350a-11ee-b5c5-93ab5c428e27_webp_original.webp",
  "https://www.gplace.com/include/img_gal/2/18/gp6357b487bb5e8.jpg",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/13/6c/e0/photo0jpg.jpg?w=900&h=500&s=1",
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
        ຖ້ຳນາງແອ່ນ (Tham Nang Aen) ແມ່ນຖ້ຳທີ່ມີຄວາມງາມທາງທຳມະຊາດ ແລະ
        ຕັ້ງຢູ່ໃນແຂວງຄຳມ່ວນ ປະເທດລາວ ໃກ້ກັບເມືອງທ່າແຂກ ປະມານ 18 ກິໂລແມັດ
        ທາງທິດຕາເວັນອອກ ຕາມທາງເລກ 12 .<br></br>
        ຖ້ຳນີ້ແມ່ນສະຖານທີ່ທ່ອງທ່ຽວທີ່ນິຍົມ ສໍາລັບນັກທ່ອງທ່ຽວທັງພາຍໃນ ແລະ
        ຕ່າງປະເທດ ທີ່ມາຢ້ຽມຢາມເພື່ອສຳຜັດຄວາມງາມຂອງຖ້ຳຫີນປູນ ແລະ
        ປະສົບການຜະຈົບໄພທາງດ້ານການທ່ອງທ່ຽວ.<br></br>
         ລັກສະນະຂອງຖ້ຳ ຄວາມຍາວ ແລະ ຄວາມສູງ:
        ຖ້ຳມີຄວາມຍາວປະມານ 1.5 ກິໂລແມັດ ແລະ ສູງສຸດປະມານ 30 ແມັດ . dnqtravel.com
        ຮູບປັ່ນຫີນປູນ: ພາຍໃນຖ້ຳມີຮູບປັ່ນຫີນປູນທີ່ສວຍງາມ ແລະ
        ມີຮູບຮ່າງທີ່ຄ້າຍກັບຫົວຊ້າງ ທີ່ເປັນຈຸດເດັ່ນຂອງຖ້ຳ .<br></br>
        ການສໍາຫຼວດຖ້ຳ: ຜູ້ເຂົ້າຊົມສາມາດເລືອກໄດ້ລະຫວ່າງການເດີນທາງໃນຖ້ຳ ຫຼື
        ນັ່ງເຮືອພາຍໃນຖ້ຳ ເພື່ອສຳຜັດຄວາມງາມຂອງຖ້ຳໃນຮູບແບບທີ່ແຕກຕ່າງ.<br></br>
        ປະຫວັດສາດ ແລະ ຕໍ່ມາ<br></br>
        ຖ້ຳນາງແອ່ນໄດ້ຖືກສຳຫຼວດໃນປີ 1992 ໂດຍຄະນະສຳຫຼວດຈາກຝຣັ່ງ ແລະ ໃນປີ 1993
        ໄດ້ຮັບການເຂົ້າເຢັ້ນຈາກເຈົ້າຟ້າຫຍິງມະຫາຈັກກະຣິ ສິຣິນທອນ ຈາກປະເທດໄທ.
        ການເຂົ້າເຢັ້ນນີ້ໄດ້ກະຕຸ້ນໃຫ້ມີການພັດທະນາຖ້ຳໃຫ້ເປັນສະຖານທີ່ທ່ອງທ່ຽວ
        ໂດຍມີການສ້າງທາງເດີນ ຕິດຕັ້ງໄຟຟ້າ ແລະ ພັດທະນາສິ່ງອໍານວຍຄວາມສະດວກຕ່າງໆ
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
