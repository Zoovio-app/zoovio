export const apiUrl = () => {
  window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://zoovio.herokuapp.com/";
};
