import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  const repoElements = repos.map(repo => (
    <li key={`${repo.url}+${repo.name}`}>
      <a href={repo.url}> {repo.name} </a>
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Repos;
