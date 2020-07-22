import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userDetails }) => (
  <>
    <p>Name: {userDetails.name}</p>
    <p>Number of Followers: {userDetails.followers}</p>
    <p>Number of Following: {userDetails.following}</p>
    <p>GitHub Profile: <a href= {userDetails.html_url}>{userDetails.html_url}</a></p>
  </>
);

UserInfo.propTypes = {
  userDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired
  }).isRequired
};

export default UserInfo;
