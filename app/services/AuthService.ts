import http from "../utils/http";

import { LocalStorageHandler } from "../utils/localStorageHandler";

const signInUser = (data: any) => {
  return http.post("login", data);
};
const signInUserPki = (data: any) => {
  return http.post("login/pki", data);
};

const logOutUser = () => {
  return http.post("logout", LocalStorageHandler.getUserToken(), {
    headers: { Authorization: `Bearer ${LocalStorageHandler.getUserToken()}` },
  });
};

const signUpUser = (data: any) => {
  return http.post("registration", data);
};

const resetPassword = (data: any) => {
  return http.post("password-resets", data);
};

const changePassword = (data: any) => {
  return http.patch("users/change-password", data, {
    headers: { Authorization: `Bearer ${LocalStorageHandler.getUserToken()}` },
  });
};

const getAllUsers = (filter = "") => {
  return http.get(`users${filter}`, {
    headers: { Authorization: `Bearer ${LocalStorageHandler.getUserToken()}` },
  });
};

const getCurrentUser = () => {
  return http.get("me", {
    headers: { Authorization: `Bearer ${LocalStorageHandler.getUserToken()}` },
  });
};

export const AuthService = {
  signInUser,
  logOutUser,
  getCurrentUser,
  signUpUser,
  getAllUsers,
  resetPassword,
  signInUserPki,
  changePassword,
};
