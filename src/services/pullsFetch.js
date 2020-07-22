export const pullsFetch = (username, repo) => {
  return fetch(`https://api.github.com/repos/${username}/${repo}/pulls`)
    .then((res) => res.json());
};
