import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../api/config";
import { ITilmeLine } from "../../api/type/timeLine";

import Tag from "../Tag";

import likeicon from "../../assets/icons/heart.svg";
import dislike from "../../assets/icons/heart-outline.svg";
import saveIcon from "../../assets/icons/saved.svg";
import unsaved from "../../assets/icons/save-outline.svg";
import commnet from "../../assets/icons/commentIcon.svg";
import multiImageIcon from "../../assets/icons/multyimages.svg";
import sample from "../../assets/images/sampleHomeCard.svg";

const HomeCardList = ({ imageList }: { imageList: ITilmeLine[] | any }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [saved, setsaved] = useState(false);

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {imageList.map((data: any, index: number) => (
        <div
          key={index}
          className=" bg-white rounded-b-2xl rounded-t-3xl w-fit space-y-5 pb-2 mt-4"
        >
          <img
            className="rounded-t-3xl aspect-square w-[24rem] cursor-pointer"
            src={data?.post?.photos ? imageUrl + data?.post?.photos[0] : sample}
            alt="test"
            onClick={() => navigate(`/friendPost/${data?.post?.id}`)}
          />

          <div className="px-2 space-y-5">
            <div className="grid grid-cols-4 text-primary_orange gap-8">
              <div className="flex gap-2 items-center">
                <button>
                  <img
                    className="w-5"
                    src={like || data?.post?.likeCount > 0 ? likeicon : dislike}
                    alt="like"
                  />
                </button>
                <div className="font-medium text-sm text-[#C38F00]">
                  {data?.post.likesCount || 0}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <button>
                  <img
                    className="w-5"
                    src={
                      saved || data?.post?.bokmarksCount > 0
                        ? saveIcon
                        : unsaved
                    }
                    alt="seve"
                  />
                </button>
                <div className="font-medium text-sm text-[#C38F00]">
                  {data?.post.bokmarksCount || 0}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <button>
                  <img className="w-5" src={commnet} alt="comment" />
                </button>
                <div className="font-medium text-sm text-[#C38F00]">
                  {data?.post.commentsCount || 0}
                </div>
              </div>
              {data.photosCount > 1 && (
                <div className="w-5 flex flex-row-reverse">
                  <img src={multiImageIcon} alt="multiImages" />
                </div>
              )}
            </div>
            <p>{data?.user?.username}</p>
          </div>
          <div className="flex flex-wrap">
            {data?.post?.tags?.map((tag: any, index: number) => (
              <Tag tag={tag} color="#812AE7" width="50px" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCardList;
