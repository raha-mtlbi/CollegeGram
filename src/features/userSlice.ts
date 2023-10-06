import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { removeToken, setToken, tokenKey } from "../api/token";
import { getMe, login, register } from "../api/user";
import { IUser } from "../api/type/user";

export const loginThunk = createAsyncThunk(
  "user/loginThunk",
  async (
    {
      usernameOrEmail,
      password,
    }: {
      usernameOrEmail: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      return await login(usernameOrEmail, password);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "user/registerThunk",
  async (
    {
      username,
      email,
      password,
    }: { username: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      return await register(username, email, password);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk("user/getMeThunk", () => {
  const resp = getMe();
  return resp;
});

export type userSliceType = {
  status: "idle" | "authorized" | "Unauthorized" | "loading";
  user: IUser | null;
  token: string | null;
};

// interface Idle {
//   status: "idle";
// }

// interface Authorized {
//   status: "authorized";
//   user: IUser;
//   token: string;
// }

// interface UnAuthorized {
//   status: "unauthorized";
// }

// interface Loading {
//   status: "loading";
// }
// export type userSliceType = Idle | Authorized | UnAuthorized | Loading;

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "Unauthorized",
    user: null,
    token: null,
  } as userSliceType,
  reducers: {
    logout(state, action) {
      localStorage.removeItem(tokenKey);

      state.status = "Unauthorized";
      state.token = null;
      state.user = null;

      removeToken(action?.payload?.user?.username);
      // return {
      //   status: "Unauthorized",
      // };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.status = "loading";

        // return {
        //   status: "loading",
        // };
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        if (action.payload.accessToken) {
          state.status = "authorized";
          setToken(
            action.payload.user?.username,
            action.payload.accessToken,
            action?.payload?.refreshToken as string
          );
          state.user = action.payload.user;

          // return {
          //   status: "authorized",
          //   user: action.payload.user,
          //   token: action.payload.accessToken,
          // };
        }
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = "Unauthorized";

        // return {
        //   status: "Unauthorized",
        // };
      });
    builder
      .addCase(registerThunk.pending, (state, action) => {
        state.status = "loading";
        // return {
        //   status: "loading",
        // };
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "authorized";
          setToken(
            action.payload.user?.username,
            action.payload.accessToken,
            action?.payload?.refreshToken as string
          );
          state.user = action.payload.user;
          state.token = action.payload.accessToken;

          // return {
          //   status: "authorized",
          //   user: action.payload.user,
          //   token: action.payload.accessToken,
          // };
        } else {
          state.status = "Unauthorized";
          // return {
          //   status: "Unauthorized",
          // };
        }
      })
      .addCase(registerThunk.rejected, (state) => {
        state.status = "Unauthorized";
        // return { status: "Unauthorized" };
      });

    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.status = "loading";
        // return { status: "loading" };
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        if (action.payload?.id) {
          state.user = action.payload;
          state.status = "authorized";

          // if (action.payload?.id && state.status === "authorized") {
          //   return {
          //     status: "authorized",
          //     user: action.payload,
          //     token: state.token,
          //   };
          // }
        }
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.status = "Unauthorized";
        // return {
        //   status: "Unauthorized",
        // };
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
