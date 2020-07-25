export const apiUrl = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "https://zoovio.herokuapp.com/";
};
