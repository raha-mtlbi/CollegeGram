import React, { useState } from "react"
import image from "../../assets/images/sampleHomeCard.svg"
import likeicon from "../../assets/icons/heart.svg"
import dislike from "../../assets/icons/heart-outline.svg"
import saveIcon from "../../assets/icons/saved.svg"
import unsaved from "../../assets/icons/save-outline.svg"
import commnet from "../../assets/icons/commentIcon.svg"

const HomeCardList = () => {
  const [like, setLike] = useState(false)
  const [saved, setsaved] = useState(false)

  return (
    <div className="text-gray_50 rounded-b-2xl rounded-t-3xl">
      <div>
        <img className="rounded-t-3xl" src={image} alt="test" />
      </div>
      <div>
        <button
          onClick={() => {
            setLike(!like)
          }}>
          <img src={like ? likeicon : dislike} alt="like" />
        </button>
        <button
          onClick={() => {
            setsaved(!saved)
          }}>
          <img src={saved ? saveIcon : unsaved} alt="seve" />
        </button>
        <button>
          <img src={commnet} alt="comment" />
        </button>
      </div>
      <div>ناصر حسین زاده</div>
      <div></div>
    </div>
  )
}

export default HomeCardList
