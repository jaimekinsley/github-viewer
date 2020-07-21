export const userFetch = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(({ userInfo }) => userInfo);
};
