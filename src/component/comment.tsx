import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { toast } from "react-toastify";

import { IComment } from "../api/type/comment";
import { get } from "../api";
import { LikeComment, UnLikeComment } from "../api/comment";
import AddComment from "./comment/addComment";

import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import arrow from "../assets/icons/arrow-left-curved.svg";

const Comment = ({ postId }: { postId: number }) => {
  const [like, setLike] = useState<boolean>(false);
  const [comment, setComment] = useState<{ result: IComment[] }>();
  const [reply, setReply] = useState<boolean>(false);

  useEffect(() => {
    get(`/comment/${postId}`)
      .then((d: any) => setComment(d))
      .catch((e) => console.log(e));
  }, [postId]);

  const handleLike = async (id: number) => {
    try {
      const response = await LikeComment(id);
      setLike(true);
      toast(response.msg);
    } catch (error) {
      console.log(error);
      setLike(false);
    }
  };

  const handleUnLike = async (id: number) => {
    try {
      const response = await UnLikeComment(id);
      setLike(false);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
      setLike(true);
    }
  };

  const ref = useRef(null);

  const handleClick = () => {
    setReply(true);
  };

  return (
    <div className="w-[85%]">
      {/* <AddComment
        postId={postId as number}
        ref={ref as any}
        reply={reply as boolean}
        setReply={setReply as React.Dispatch<React.SetStateAction<boolean>>}
      /> */}
      <div className="max-h-[300px] overflow-y-auto">
        {comment &&
          comment.result.map((comment: any) => {
            return (
              <div>
                {/* comment */}
                <div className=" my-5 ">
                  <div className=" flex justify-between items-center my-2">
                    <div className="flex">
                      <p className="text-[12px] font-bold text-[#17494D] ">
                        {comment?.author?.username}
                      </p>
                      <p className="mr-[8px] text-[#A5A5A5] text-[10px]">
                        {format(new Date(comment?.createdAt), "yyyy-MM-dd")}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className=" text-[12px] font-black text-[#C38F00]">
                        {comment?.likeCount}
                      </p>
                      <button
                        onClick={() =>
                          like || comment?.likeCount > 0
                            ? handleUnLike(comment?.id)
                            : handleLike(comment?.id)
                        }
                        className="mr-[8px]"
                      >
                        <img
                          src={like || comment?.likeCount > 0 ? Like : disLike}
                          alt=""
                        />
                      </button>
                      <button
                        onClick={handleClick}
                        className="mr-[28px] text-[12px] font-black text-[#C38F00]"
                      >
                        {<img src={arrow} className="mr-[6px]" alt="" />}پاسخ
                      </button>
                    </div>
                  </div>
                  <p>{comment.content}</p>
                </div>

                {/* {item.reply && (
                  <div className="my-5 mr-[32px]">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <p className="text-[12px] font-bold text-[#17494D] ">
                          {item.reply.name}
                        </p>
                        <p className="mr-[8px] text-[#A5A5A5] text-[10px]">
                          {item.reply.time}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[12px] font-black text-[#C38F00]">
                          2
                        </p>
                        <button onClick={handleLike} className="mr-[8px]">
                          <img src={isLike ? Like : disLike} alt="" />
                        </button>
                        <button
                          onClick={handleReply}
                          className="mr-[28px] text-[12px] font-black text-[#C38F00]"
                        >
                          {<img src={arrow} className="mr-[6px]" alt="" />}پاسخ
                        </button>
                      </div>
                    </div>
                    <p>{item.reply.text}</p>
                  </div>
                )} */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
