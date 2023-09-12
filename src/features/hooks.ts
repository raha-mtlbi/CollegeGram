import { useAppSelector } from "../store";

export function useUser() {
  return useAppSelector((s) =>
    s.user.status === "authorized" ? s.user.user : null
  );
}

export function useUserStatus() {
  return useAppSelector((s) => s.user.status);
}
