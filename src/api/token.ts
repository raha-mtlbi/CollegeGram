import Cookies from "js-cookie";

export const tokenKey = "token";

export function getToken() {
  const token = Cookies.get(tokenKey);
  console.log(token);
  
  return token;
}

export function setToken(token: string) {
  Cookies.set(tokenKey, token, { expires: 7 });
}

export function removeToken() {
  Cookies.remove(tokenKey);
}
