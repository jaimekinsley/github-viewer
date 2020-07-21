import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ username, followers, following, link }) => (
  <>
    <p>Name: {username}</p>
    <p>Number of Followers: {followers}</p>
    <p>Number of Following: {following}</p>
    <p>GitHub Profile: {link}</p>
  </>
);

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired
};

export default UserInfo;
