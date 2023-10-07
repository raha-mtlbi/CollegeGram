import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { get } from "../../api";
import { LikePost, UnLikePost } from "../../api/post";

import likeicon from "../../assets/icons/heart.svg";
import dislike from "../../assets/icons/heart-outline.svg";
import sample from "../../assets/images/imageListSampel.svg";
import multiImageIcon from "../../assets/icons/multyimages.svg";
import cancel from "../../assets/icons/cancel.svg";

const SearchPage = () => {
  const { tag } = useParams();
  const [searchList, setSearchList] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    get(`/post/search/${tag}`)
      .then((d: any) => setSearchList(d))
      .catch((e) => console.log(e));
  }, [tag]);

  const handleLike = async (id: number) => {
    try {
      const response = await LikePost(id);
      const data = await get(`/post/search/${tag}`);
      setSearchList(data);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnLike = async (id: number) => {
    try {
      const response = await UnLikePost(id);
      const data = await get(`/post/search/${tag}`);
      setSearchList(data);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-[#587052] font-bold text-lg mr-12 flex ">
        <div className="flex items-center">
          <p>نتیجه جستجو برای: </p>
          <p className="mx-2">{tag} </p>
        </div>
        <button className="mr-4" onClick={() => navigate(-1)}>
          <img src={cancel} alt="cancel" />
        </button>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 mr-12">
        {searchList?.slice(0, 3)?.map((data: any, index: number) => (
          <div
            key={index}
            className=" bg-[#F9F9F9] rounded-b-2xl rounded-t-3xl space-y-5 pb-2 mt-4 w-[320px] h-[380px]"
          >
            <img
              className="rounded-t-3xl aspect-square w-full cursor-pointer"
              src={data?.photos ? data?.photos : sample}
              alt="test"
              onClick={() => navigate(`/friendPost/${data?.id}`)}
            />

            <div className="flex justify-between mx-2">
              <div className="flex items-center ">
                <button
                  onClick={() => {
                    data?.ifLiked
                      ? handleUnLike(data?.id)
                      : handleLike(data?.id);
                  }}
                >
                  <img
                    className="w-5"
                    src={data?.ifLiked ? likeicon : dislike}
                    alt="like"
                  />
                </button>
                <div className="font-medium text-sm text-[#C38F00] mx-2">
                  {data?.likeCount || 0}
                </div>
              </div>

              {data.photosCount > 1 && (
                <div className="w-5 flex flex-row-reverse">
                  <img src={multiImageIcon} alt="multiImages" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-4 gap-4 mr-12">
        {searchList?.slice(3, 7)?.map((data: any, index: number) => (
          <div
            key={index}
            className=" bg-[#F9F9F9] rounded-b-2xl rounded-t-3xl space-y-5 pb-2 mt-4 w-[235px] h-[300px]"
          >
            <img
              className="rounded-t-3xl aspect-square w-full cursor-pointer"
              src={data?.photos ? data?.photos : sample}
              alt="test"
              onClick={() => navigate(`/friendPost/${data?.id}`)}
            />

            <div className="flex justify-between mx-2">
              <div className="flex items-center ">
                <button
                  onClick={() => {
                    data?.ifLiked
                      ? handleUnLike(data?.id)
                      : handleLike(data?.id);
                  }}
                >
                  <img
                    className="w-5"
                    src={data?.ifLiked ? likeicon : dislike}
                    alt="like"
                  />
                </button>
                <div className="font-medium text-sm text-[#C38F00] mx-2">
                  {data?.likeCount || 0}
                </div>
              </div>

              {data.photosCount > 1 && (
                <div className="w-5 flex flex-row-reverse">
                  <img src={multiImageIcon} alt="multiImages" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
