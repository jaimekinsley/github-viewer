export const repoFetch = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json());
};
