import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import moment from "jalali-moment";

import { IComment } from "../api/type/comment";
import { get } from "../api";
import { LikeComment, UnLikeComment } from "../api/comment";
import AddComment from "./comment/addComment";

import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import arrow from "../assets/icons/arrow-left-curved.svg";

const Comment = ({ postId }: { postId: number }) => {
  const [comment, setComment] = useState<{ result: IComment[] }>();
  const [parentId, setParentId] = useState<number | null>(null);

  useEffect(() => {
    get(`/comment/${postId}`)
      .then((d: any) => {
        setComment(d);
        console.log(d);
      })
      .catch((e) => console.log(e));
  }, [postId]);

  const handleLike = async (id: number) => {
    try {
      const response = await LikeComment(id);
      const newComments = await get(`/comment/${postId}`);
      setComment(newComments);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnLike = async (id: number) => {
    try {
      const response = await UnLikeComment(id);
      const newComments = await get(`/comment/${postId}`);
      setComment(newComments);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const InputRef = useRef<any>();

  const handleClick = (id: number) => {
    setParentId(id);
    InputRef.current.focus();
  };

  return (
    <div className="w-[85%] md:pb-24">
      <AddComment
        postId={postId as number}
        InputRef={InputRef as any}
        parentId={parentId as number | null}
        setParentId={
          setParentId as React.Dispatch<React.SetStateAction<number | null>>
        }
        setComment={setComment as any}
      />
      <div className="max-h-[300px] overflow-y-auto m-2">
        {comment &&
          comment.result.map((comment: any, index) => {
            return (
              <div key={index}>
                {/* comment */}

                {comment?.parentId === 0 && (
                  <div className=" my-5 mr-2">
                    <div className=" flex justify-between items-center my-2">
                      <div className="flex">
                        <p className="text-[12px] font-bold text-[#17494D] ">
                          {comment?.author?.username}
                        </p>
                        <p className="mr-[8px] text-[#A5A5A5] text-[10px]">
                          {moment(comment.createdAt, "YYYY/MM/DD")
                            .locale("fa")
                            .format("YYYY/MM/DD")}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className=" text-[12px] font-black text-[#C38F00]">
                          {comment?.likeCount}
                        </p>
                        <button
                          onClick={() => {
                            comment.ifLiked
                              ? handleUnLike(comment?.id)
                              : handleLike(comment?.id);
                          }}
                          className="mr-[8px]"
                        >
                          <img src={comment?.ifLiked ? Like : disLike} alt="" />
                        </button>
                        <button
                          id={comment?.id}
                          onClick={() => handleClick(comment?.id as number)}
                          className="mr-[28px] text-[12px] font-black text-[#C38F00]"
                        >
                          {<img src={arrow} className="mr-[6px]" alt="" />}پاسخ
                        </button>
                      </div>
                    </div>
                    <p className="text-[14px]">{comment.content}</p>
                  </div>
                )}
                {(comment?.parentId !== 0 ||
                  comment?.parentId === comment?.id) && (
                  <div className="my-5 mr-12">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <p className="text-[12px] font-bold text-[#17494D] ">
                          {comment?.author?.username}
                        </p>
                        <p className="mr-[8px] text-[#A5A5A5] text-[10px]">
                          {moment(comment.createdAt, "YYYY/MM/DD")
                            .locale("fa")
                            .format("YYYY/MM/DD")}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[12px] font-black text-[#C38F00]">
                          {comment?.likeCount}
                        </p>
                        <button
                          onClick={() => {
                            comment.ifLiked
                              ? handleUnLike(comment?.id)
                              : handleLike(comment?.id);
                          }}
                          className="mr-[8px]"
                        >
                          <img src={comment?.ifLiked ? Like : disLike} alt="" />
                        </button>
                        <button
                          id={comment?.id}
                          onClick={() => handleClick(comment?.id as number)}
                          className="mr-[28px] text-[12px] font-black text-[#C38F00]"
                        >
                          {<img src={arrow} className="mr-[6px]" alt="" />}
                          پاسخ
                        </button>
                      </div>
                    </div>
                    <p className="text-[14px]">{comment.content}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
