import React from "react"

const Tag = (props: { tag: string }) => {
  return (
    <div>
      <div
        className={
          "p-2 bg-[#0074E8] rounded-[4px] text-[#FFF] text-[14px] m-2"
        }>
        {props.tag}
      </div>
    </div>
  )
}

export default Tag
