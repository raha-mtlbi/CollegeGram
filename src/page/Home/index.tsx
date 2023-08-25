import InnerHome from "../../component/home/innerhome";

export default function Home() {
  return (
    <div className="grid grid-cols-1">
      <p className=" font-bold text-[22px] mr-[50px] ">خانه</p>
      <InnerHome />
    </div>
  );
}
