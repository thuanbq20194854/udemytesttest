export const getAuthLocalStorage = () => localStorage.getItem("token") ?? "";
export const setAuthLocalStorage = (token: string) =>
    localStorage.setItem("token", token);
export const clearAuthLocalStorage = () => localStorage.removeItem("token");
