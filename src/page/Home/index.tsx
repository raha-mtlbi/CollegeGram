import { useState } from "react"
import HomeCardList from "../../component/home/HomeCardList"
import InnerHome from "../../component/home/innerhome"

export default function Home() {
  const [count, setCount] = useState(1)
  return (
    <div className="grid grid-cols-1">
      <p className=" font-bold text-[22px] mr-12 ">خانه</p>
      {count ? (
        <div className="grid grid-cols-3 mr-12 mt-8 w-[95%]">
          <HomeCardList />
          <HomeCardList />
          <HomeCardList />
          <HomeCardList />
          <HomeCardList />
          <HomeCardList />
        </div>
      ) : (
        <InnerHome />
      )}
    </div>
  )
}
