export const tokenKey = "accessToken";
export const refreshTokenKey = "refreshToken";

export function getToken() {
  const token = localStorage.getItem(tokenKey);
  console.log(token);

  return token;
}

export function setToken(token: string) {
  localStorage.setItem(tokenKey, token);
}

export function setRefreshToken(token: string) {
  localStorage.setItem(refreshTokenKey, token);
}

export function removeToken() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(refreshTokenKey);
}
