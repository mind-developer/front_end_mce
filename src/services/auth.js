export const isAuthenticated = () => localStorage.getItem("jwt") !== null;
export const getToken = () => localStorage.getItem("jwt");
export const getNivel = () => localStorage.getItem("nivel");
export const getId = () => localStorage.getItem("id");

export const login = (token, acesso, id) => {
  localStorage.setItem("jwt", token);
  localStorage.setItem("nivel", acesso);
  localStorage.setItem("id", id);
};
export const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("nivel");
  localStorage.removeItem("id");
};
