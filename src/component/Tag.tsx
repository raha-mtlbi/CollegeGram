import React from "react"

const Tag = (props: { tag: string; color: string }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: `${props.color}` }}
        className={`py-1 px-2 rounded-[4px] text-[#FFF] text-[14px] m-2`}>
        {props.tag}
      </div>
    </div>
  )
}

export default Tag
