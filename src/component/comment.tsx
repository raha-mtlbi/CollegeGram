import { useEffect, useState } from "react";

import { get } from "../api";
import { IComment } from "../api/type/comment";
import AddComment from "./comment/addComment";
import { LikeComment, UnLikeComment } from "../api/comment";
import { useUser } from "../features/hooks";

import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import arrow from "../assets/icons/arrow-left-curved.svg";

const Comment = ({ postId }: { postId: string }) => {
  const [like, setLike] = useState<boolean>(false);
  const [comment, setComment] = useState<{ result: IComment[] }>();
  const user = useUser();

  useEffect(() => {
    get(`/comment/${postId}`)
      .then((d: any) => setComment(d))
      .catch((e) => console.log(e));
  }, [postId]);

  const handleLike = (id: number) => {
    try {
      LikeComment(
        // 1
        id
      );
      setLike(true);
    } catch (error) {
      console.log(error);
      setLike(false);
    }
  };

  const handleUnLike = (id: number) => {
    try {
      UnLikeComment(
        // 1
        id
      );
      setLike(false);
    } catch (error) {
      console.log(error);
      setLike(true);
    }
  };

  return (
    <div className="w-[85%]">
      <AddComment postId={postId} />
      <div className="max-h-[300px] overflow-y-auto">
        {comment &&
          comment.result.map((comment) => {
            return (
              <div>
                {/* comment */}
                <div className=" my-5 ">
                  <div className=" flex justify-between items-center my-2">
                    <div className="flex">
                      <p className="text-[12px] font-bold text-[#17494D] ">
                        {user?.name + "" + user?.lastname}
                      </p>
                      <p className="mr-[8px] text-[#A5A5A5] text-[10px]">
                        {/* {comment?.createdAt} */}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className=" text-[12px] font-black text-[#C38F00]">
                        {comment?.likeCount}
                      </p>
                      <button
                        onClick={() =>
                          like
                            ? handleUnLike(comment?.id)
                            : handleLike(comment?.id)
                        }
                        className="mr-[8px]"
                      >
                        <img src={like ? Like : disLike} alt="" />
                      </button>
                      <button
                        onClick={() => {}}
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
