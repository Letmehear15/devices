import { UsersIdGetRequest } from "../api/generated";

export const setNewToken = (
  token: string | undefined,
  userId: number | undefined
) => {
  localStorage.setItem('deviceToken', token ? token : '');
  localStorage.setItem('deviceUserId', userId ? `${userId}` : '');
};

export const getTokenFromLocalStorage = (): { authToken: string } => {
  const authToken = localStorage.getItem('deviceToken');

  if (!authToken) {
    setNewToken(undefined, undefined);
    return { authToken: '' };
  }
  return { authToken };
};

export const getAuthDataFromLocalStorage = (): UsersIdGetRequest | null => {
  const authToken = localStorage.getItem('deviceToken')
  const authId = localStorage.getItem('deviceUserId')
  if (!authToken || !authId) {
    setNewToken(undefined, undefined);
    return null;
  }
  return { authToken, id: Number(authId) };
};

export const deleteTokenFromLocalstorage = () => {
  localStorage.removeItem('deviceToken');
  localStorage.removeItem('deviceUserId');
};
