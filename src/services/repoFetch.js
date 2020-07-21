export const userFetch = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(({ repoElements }) => repoElements);
};
