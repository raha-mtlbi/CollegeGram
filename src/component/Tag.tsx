import React from "react";

const Tag = (props: { tag: string; color: string; width?: string }) => {
  return (
    <div
      style={{ backgroundColor: `${props.color}`, width: `${props.width}` }}
      className={`py-1 px-2 rounded-[4px] text-[#FFF] text-[14px] m-2`}
    >
      <p>{props.tag}</p>
    </div>
  );
};

export default Tag;
