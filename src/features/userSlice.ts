import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { removeToken, setRefreshToken, setToken } from "../api/token";
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
  status: "idle" | "authorized" | "unauthorized" | "loading";
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
    status: "idle",
    user: null,
    token: null,
  } as userSliceType,
  reducers: {
    logout(state) {
      state.status = "unauthorized";
      state.token = null;
      state.user = null;

      removeToken();
      // return {
      //   status: "unauthorized",
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
          setToken(action.payload.accessToken);
          setRefreshToken(action.payload.refreshToken as string);
          state.user = action.payload.user;

          // return {
          //   status: "authorized",
          //   user: action.payload.user,
          //   token: action.payload.accessToken,
          // };
        }
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = "unauthorized";

        // return {
        //   status: "unauthorized",
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
          setToken(action.payload.accessToken);
          setRefreshToken(action.payload.refreshToken as string);
          state.user = action.payload.user;
          state.token = action.payload.accessToken;

          // return {
          //   status: "authorized",
          //   user: action.payload.user,
          //   token: action.payload.accessToken,
          // };
        } else {
          state.status = "unauthorized";
          // return {
          //   status: "unauthorized",
          // };
        }
      })
      .addCase(registerThunk.rejected, (state) => {
        state.status = "unauthorized";
        // return { status: "unauthorized" };
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
        state.status = "unauthorized";
        // return {
        //   status: "unauthorized",
        // };
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
