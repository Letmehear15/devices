import { createAction, Draft, createReducer } from '@reduxjs/toolkit';
import { LoginPostRequest, User, UserWithToken } from '../../../api/generated';
import { initWithToken } from '../init';
import { redirectTo } from '../router';

export const loginRequest = createAction<LoginPostRequest>('auth/loginRequest');
export const loginSuccess = createAction<UserWithToken>('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

export const logout = createAction('auth/logout');

export type AuthActions = ReturnType<
  | typeof loginRequest
  | typeof loginSuccess
  | typeof loginError
  | typeof redirectTo
>;

export type AuthStatus = {
  success: boolean;
  error: boolean;
  loading: boolean;
};

const initialState = {
  user: {} as UserWithToken | User,
  status: {
    success: false,
    error: false,
    loading: false,
  } as AuthStatus,
};

export type AuthState = Draft<typeof initialState>;

export default createReducer(initialState, {
  [loginRequest.type]: (state: AuthState) => {
    state.status = {
      loading: true,
      error: false,
      success: false,
    };
  },
  [loginSuccess.type]: (
    state: AuthState,
    action: ReturnType<typeof loginSuccess>
  ) => {
    state.user = action.payload;
    state.status = {
      loading: false,
      error: false,
      success: true,
    };
  },
  [loginError.type]: (state: AuthState) => {
    state.status = {
      loading: false,
      error: true,
      success: false,
    };
  },
  [logout.type]: (state: AuthState) => {
    state.user = {}
    state.status = {
      loading: false,
      error: false,
      success: false,
    };
  },
  [initWithToken.type]: (state: AuthState, action: ReturnType<typeof initWithToken>) => {
    state.user = action.payload
    state.status = {
      loading: false,
      error: false,
      success: true,
    };
  },
});
