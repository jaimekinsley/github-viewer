import React from 'react';
import PropTypes from 'prop-types';

const Pulls = ({ pulls }) => {
  const pullRequests = pulls.map(pull => (
    <li key={`${pull.html_url}+${pull.numer}`}>
      <a href={pull.html_url}> {pull.number} </a>
    </li>
  ));

  return (
    <ul>
      {pullRequests}
    </ul>
  );
};

Pulls.propTypes = {
  pulls: PropTypes.arrayOf(PropTypes.object)
};

export default Pulls;
