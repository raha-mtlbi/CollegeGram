import { blockUser, follow, unFollow } from "../api/otherUser";

export const handleBlock = (id: number, setBlocks: (a: boolean) => void) => {
  try {
    blockUser(id as number);
    setBlocks(true);
  } catch (error) {
    console.log(error);
    setBlocks(false);
  }
};

export const handleFollow = (id: number, setFollows: (a: boolean) => void) => {
  try {
    follow(id as number);
    setFollows(true);
  } catch (error) {
    console.log(error);
    setFollows(false);
  }
};

export const handleUnFollow = (
  id: number,
  setFollows: (a: boolean) => void
) => {
  try {
    unFollow(id as number);
  } catch (error) {
    console.log(error);
  }
};
