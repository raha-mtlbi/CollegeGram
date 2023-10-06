import { delete_, post } from ".";

export const follow = (id: number) => {
  return post(`/user/${id}/follow`);
};
export const unFollow = (id: number) => {
  return delete_(`/user/${id}/unfollow`);
};

export const blockUser = (id: number) => {
  return post(`/user/${id}/block`);
};

export const unBlockUser = (id: number) => {
  return post(`/user/${id}/unblock`);
};

export const CloseFriendUser = (id: number) => {
  return post(`/user/${id}/closefriend`);
};

export const acceptRequest = (id: number) => {
  return post(`/user/${id}/accept`);
};

export const rejectRequest = (id: number) => {
  return delete_(`/user/${id}/reject`);
};
