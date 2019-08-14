const getToken = () => {
  const token = localStorage.getItem("forum-token");
  if (token) {
    return token;
  } else {
    return null;
  }
};

export default getToken;
