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

// export const getCurrentUser = createAsyncThunk("user/me", async ({ token }: { token?: string }, { rejectWithValue }) => {
//   try {
//     return await getMe();
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

export const getCurrentUser = createAsyncThunk("user/getMeThunk", () => {
  const resp = getMe();
  return resp;
});

export type userSliceType = {
  status: "idle" | "authorized" | "unauthorized" | "loading";
  user: IUser | null;
  token: string | null;
};

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
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log(action.payload.accessToken);

        if (action.payload.accessToken) {
          state.status = "authorized";
          setToken(action.payload.accessToken);
          setRefreshToken(action.payload.refreshToken as string);
          state.user = action.payload.user;
        }
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = "unauthorized";
      });
    builder
      .addCase(registerThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "authorized";
          setToken(action.payload.accessToken);
          setRefreshToken(action.payload.refreshToken as string);

          state.user = action.payload.user;
          state.token = action.payload.accessToken;
        } else {
          state.status = "unauthorized";
        }
      })
      .addCase(registerThunk.rejected, (state) => {
        state.status = "unauthorized";
      });

    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        if (action.payload?.id) {
          state.user = action.payload;
          state.status = "authorized";
        }
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.status = "unauthorized";
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
