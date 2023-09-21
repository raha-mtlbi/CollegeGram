// Function to save access token and refresh token when a user logs in
function saveTokens(username, accessToken, refreshToken) {
    localStorage.setItem(`${username}-accesstoken`, accessToken);
    localStorage.setItem(`${username}-refreshtoken`, refreshToken);
    setActiveUser(username); // Set the last active user
  }
  
  // Function to delete tokens when a user logs out and update the active user
  function deleteTokens(username) {
    localStorage.removeItem(`${username}-accesstoken`);
    localStorage.removeItem(`${username}-refreshtoken`);
    
    const activeUser = getActiveUser();
    if (activeUser === username) {
      // The logged out user was the active user, find the first available user
      const allUsers = getActiveUsers();
      if (allUsers.length > 0) {
        setActiveUser(allUsers[0]); // Set the first available user as active
      } else {
        setActiveUser(""); // No active users left
      }
    }
  }
  
  // Function to set the active user
  function setActiveUser(username) {
    localStorage.setItem("active-user", username);
  }
  
  // Function to get the currently active user
  function getActiveUser() {
    return localStorage.getItem("active-user") || null;
  }
  
  // Function to get access token for the current active user
  function getAccessToken() {
    const activeUser = getActiveUser();
    if (activeUser) {
      return localStorage.getItem(`${activeUser}-accesstoken`);
    } else {
      return null; // No active user
    }
  }
  
  // Function to get refresh token for the current active user
  function getRefreshToken() {
    const activeUser = getActiveUser();
    if (activeUser) {
      return localStorage.getItem(`${activeUser}-refreshtoken`);
    } else {
      return null; // No active user
    }
  }
  
  // Function to get a list of currently active users
  function getActiveUsers() {
    const activeUsers = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.endsWith("-accesstoken") || key.endsWith("-refreshtoken")) {
        const username = key.split('-')[0];
        if (!activeUsers.includes(username)) {
          activeUsers.push(username);
        }
      }
    }
    return activeUsers;
  }
  