export const isAuthenticated = () => localStorage.getItem("jwt") !== null;
export const getToken = () => localStorage.getItem("jwt");
export const getUser = () => JSON.parse(localStorage.getItem("user"));

export const login = (token, user) => {
  localStorage.setItem("jwt", token);
  localStorage.setItem("user", JSON.stringify(user));
};
export const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
};
