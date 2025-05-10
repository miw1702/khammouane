import { Link } from "react-router-dom";
import Tuanangsuokhang from "../components/Tuanangsuokhng"
function Home() {
  
  return (
    <div className="bg-[url(https://discoverlaos.today/img/thing_to_do/308eac6caf05dd0a72766cb85b386a97.jpg?p=original)] h-screen w-screen p-4 overflow-auto">
      <Tuanangsuokhang></Tuanangsuokhang>
      <div className="grid md:grid-cols-2 gap-10 md:px-96 ">
        <div className="">
          <span className="text-white font-bold text-4xl">1. ຖ້ຳນາງແອ່ນ</span>
          <Link to={"/Thamaen"}>
            <img
              src="https://www.gplace.com/include/img_res/2/18/gp6357afbe0c484.jpg"
              className="mt-4 h-90 w-90 border-4 hover:border-8 border-white rounded-md shadow-2xl shadow-black hover:scale-100 transition duration-500 hover:-translate-y-2 hover:border-black hover:cursor-pointer"
              alt=""
            />
          </Link>
        </div>
        <div className="">
          <span className="text-white font-bold text-4xl">2. ພູຜາມ່ານ</span>
          <Link to={"/phuphaman"}>
            <img
              src="https://www.chillpainai.com/src/wewakeup/scoop/images/925fc3ca8f34168c5a9d0b718c6961a248cbed08.jpg"
              className="mt-4 h-90 w-90 border-4 hover:border-8 border-white rounded-md shadow-2xl shadow-black hover:scale-100 transition duration-500 hover:-translate-y-2 hover:border-black hover:cursor-pointer"
              alt=""
            ></img>{" "}
          </Link>
        </div>
        <div className="">
          <span className="text-white font-bold text-4xl">3. ທ່າຝຮັ່ງ</span>
          <Link to={"/Thafhang"}>
            <img
              src="https://f.ptcdn.info/306/079/000/rmzol713a3Mcfan3eRUq-o.jpg"
              className="mt-4 h-90 w-90 border-4 hover:border-8 border-white rounded-md shadow-2xl shadow-black hover:scale-100 transition duration-500 hover:-translate-y-2 hover:border-black hover:cursor-pointer"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="">
          <span className="text-white font-bold text-4xl">4. ຖ້ຳກອງລໍ</span>
          <Link to={"/Thamkonglo"}>
            <img
              src="https://ak-d.tripcdn.com/images/1mi1z2224unbzsze8DFFE_W_640_0_R5_Q80.jpg?proc=source/trip"
              className="mt-4 h-90 w-90 border-4 hover:border-8 border-white rounded-md shadow-2xl shadow-black hover:scale-100 transition duration-500 hover:-translate-y-2 hover:border-black hover:cursor-pointer"
              alt=""
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
