export const tokenKey = "accessToken";
export const refreshTokenKey = "refreshToken";

export function setToken(
  username: string,
  accessToken: string,
  refreshToken: string
) {
  localStorage.setItem(`${username}-accesstoken`, accessToken);
  localStorage.setItem(`${username}-refreshtoken`, refreshToken);
  setActiveUser(username);
}

export function setActiveUser(username: string) {
  localStorage.setItem("active-user", username);
}

export function removeToken(username?: string) {
  localStorage.removeItem(`${username}-accesstoken`);
  localStorage.removeItem(`${username}-refreshtoken`);

  const activeUser = getActiveUser();
  if (activeUser === username) {
    const allUsers = getActiveUsers();
    if (allUsers.length > 0) {
      setActiveUser(allUsers[0]);
    } else {
      setActiveUser("");
    }
  }
}

export function getActiveUser() {
  return localStorage.getItem("active-user") || null;
}

export function getAccessToken() {
  const activeUser = getActiveUser();
  if (activeUser) {
    return localStorage.getItem(`${activeUser}-accesstoken`);
  } else {
    return null;
  }
}

export function getRefreshToken() {
  const activeUser = getActiveUser();
  if (activeUser) {
    return localStorage.getItem(`${activeUser}-refreshtoken`);
  } else {
    return null;
  }
}

export function getActiveUsers() {
  const activeUsers: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key: string = localStorage.key(i) as string;
    if (key.endsWith("-accesstoken") || key.endsWith("-refreshtoken")) {
      const username = key.split("-")[0];
      if (!activeUsers.includes(username)) {
        activeUsers.push(username);
      }
    }
  }
  return activeUsers;
}

// export function getToken() {
//   const token = localStorage.getItem(tokenKey);

//   return token;
// }

// export function setToken(token: string) {
//   localStorage.setItem(tokenKey, token);
//   localStorage.setItem(refreshTokenKey, token);
// }

// export function setRefreshToken(token: string) {
//   localStorage.setItem(refreshTokenKey, token);
// }

// export function removeToken() {
//   localStorage.removeItem(tokenKey);
//   localStorage.removeItem(refreshTokenKey);
// }
