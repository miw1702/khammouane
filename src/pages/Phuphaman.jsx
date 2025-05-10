// function Phuphaman() {
//     return <div

//     className="bg-black h-screen text-white ">ສະບາຍດີ</div>;
//   }
//   export default Phuphaman
import { useState } from "react";

const images = [
  "https://discoverlaos.today/img/post/fd9bcefe48c0ddc7045e84a9d8c46ac0.jpg?p=original",
  "https://www.chillpainai.com/src/wewakeup/scoop/images/07919332e60309ca029cfc882dc97694787ccb22.jpg",
  "https://www.chillpainai.com/src/wewakeup/scoop/images/b31ae2b41b1eef6add8e29bd89e34a33063aa07f.jpg",
  "https://ak-d.tripcdn.com/images/1mi292224ugxrva9s3D07_W_640_0_R5_Q80.jpg?proc=source/trip",
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
        ພູຜາມາ່ນ (Phou Pha Marn) ແມ່ນພູເຂົາທີ່ມີຄວາມງາມທາງທຳມະຊາດ
        ຢູ່ໃນແຂວງຄຳມ່ວນ ສປປ ລາວ ແລະ
        ເປັນສະຖານທີ່ທ່ອງທ່ຽວທີ່ເປັນທີ່ນິຍົມສຳລັບນັກທ່ອງທ່ຽວທັງຊາວລາວ ແລະ
        ຕ່າງປະເທດ. <br></br>
        ຂໍ້ມູນທົ່ວໄປຂອງພູຜາມາ່ນ ࡈ້ເຊິ່ງຕໍ່ໄປນີ້: <br></br>
        1. ທຳເນຽມສະຖານທີ່ ພູຜາມາ່ນ ຢູ່ໃນເມືອງຫີນບູນ ແຂວງຄຳມ່ວນ, ໃນພາກກາງຂອງ ສປປ
        ລາວ. ຢູ່ໃກ້ກັບທາງຫົນສົ່ງໝາຍເລກ 8 (Route 8)
        ທີ່ເປັນເສັ້ນທາງຫຼັກໄປຍັງດ່ານນາແຫຼງ (ແຂວງຄຳມ່ວນ) ເຊື່ອມຕໍ່ກັບປະເທດໄທ.{" "}
        <br></br>
        2. ລັກສະນະທໍາມະຊາດ ພູຜາມາ່ນ ແມ່ນພູຫີນປູນ (karst mountains)
        ມີຮູບຮ່າງແປກຫຼາຍ,
        ແລະເປັນສ່ວນໜຶ່ງຂອງເຂດຂູມພູໄຮ່ເຂົາຫີນທີ່ຂຶ້ນຊື່ແລະມີຄວາມງາມໂດດເດັ່ນ.
        ໃນເຂດນີ້ມີຖໍ້າຫຼາຍແຫ່ງ, ຊື່ດັງໆເຊັ່ນ: ຖໍ້າຄອງລໍ້, ຖໍ້າເພຍ, ແລະ
        ຖໍ້າສວັນໄຊ. ພູຜາມາ່ນຍັງເປັນທີ່ຢູ່ຂອງພັນສັດແລະພືດປ່າທີ່ຫາຍາກຫຼາຍຊະນິດ.
        <br></br>
        ຈາກຕົວເມືອງທ່າແຂກໄປມູນຜາມ່ານ (ຜາມ່ານ Cave, ຕັ້ງຢູ່ໃນເມືອງຫີນບູນ,
        ແຂວງຄຳມ່ວນ), ຫ່າງກັນປະມານ 40-50 ກິໂລແມັດ ຂຶ້ນກັບເສັ້ນທາງທີ່ໃຊ້.
        ເວລາເດີນທາງໂດຍລົດແບບປົກກະຕິ ປະມານ 1 ຊົ່ວໂມງ ຫຼື ນ້ອຍກວ່ານັ້ນ.
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
