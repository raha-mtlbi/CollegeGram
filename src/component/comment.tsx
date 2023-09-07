import { useEffect, useState } from "react";
import { get } from "../api";
import { IComment } from "../api/type/comment";
import { useUser } from "../features/hooks";

import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import arrow from "../assets/icons/arrow-left-curved.svg";
import AddComment from "./comment/addComment";
<<<<<<< HEAD
import { imageUrl } from "../api/config";

const Comment = ({ postId }: { postId: number }) => {
=======

const Comment = ({ postId }: { postId: string }) => {
>>>>>>> 1670c02db9279f5b4ccd1a8fabcf1d3b1b1a7dcc
  const [isLike, setIsLike] = useState<boolean>(false);
  const [comment, setComment] = useState<{ result: IComment[] }>();
  const user = useUser();

  useEffect(() => {
    get(`/comment/${postId}`)
      .then((d: any) => setComment(d))
      .catch((e) => console.log(e));
  }, [postId]);

  return (
    <div className="w-[85%]">
      <AddComment postId={postId} />
      <div>
        {comment &&
          comment.result.map((comment) => {
            return (
              <div>
                {/* comment */}
                <div className=" my-5">
                  <div className=" flex justify-between items-center my-2">
                    <div className="flex">
                      <p className="text-[12px] font-bold text-[#17494D] ">
                        {user?.name + "" + user?.lastname}
                      </p>
                      <p className="mr-[8px] text-[#A5A5A5] text-[10px]">
<<<<<<< HEAD
                        {imageUrl + user?.photo}
=======
                        {/* {user.} */}
>>>>>>> 1670c02db9279f5b4ccd1a8fabcf1d3b1b1a7dcc
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className=" text-[12px] font-black text-[#C38F00]">
                        2
                      </p>
                      <button
                        onClick={() => setIsLike((isLike) => !isLike)}
                        className="mr-[8px]"
                      >
                        <img src={isLike ? Like : disLike} alt="" />
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
                {/* reply */}
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
