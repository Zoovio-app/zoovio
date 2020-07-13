export const apiUrl = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3001";
  }
};
