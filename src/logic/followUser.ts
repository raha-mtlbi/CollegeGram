import { blockUser, follow, unFollow } from "../api/otherUser";

export const handleBlock = async (
  id: number,
  setBlocks: (a: boolean) => void
) => {
  try {
    await blockUser(id as number);
    setBlocks(true);
  } catch (error) {
    console.log(error);
    setBlocks(false);
  }
};

export const handleFollow = async (
  id: number,
  setFollows: (a: boolean) => void
) => {
  try {
    await follow(id as number);
    setFollows(true);
  } catch (error) {
    console.log(error);
    setFollows(false);
  }
};

export const handleUnFollow = async (
  id: number,
  setFollows: (a: boolean) => void
) => {
  try {
    await unFollow(id as number);
    setFollows(false);
  } catch (error) {
    console.log(error);
    setFollows(true);
  }
};
