import React from "react"
import SideBar from "../component/sidebar"

const MySavePage = () => {
  return (
    <div className="flex justify-between items-center mt-32 w-full">
      <div className="w-full">my saves</div>
      <div>
        <SideBar />
      </div>
    </div>
  )
}

export default MySavePage
