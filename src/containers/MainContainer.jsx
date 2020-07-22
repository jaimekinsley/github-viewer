import React, { Component } from 'react';
import ShortForm from '../components/ShortForm/ShortForm';
import UserInfo from '../components/UserInfo/UserInfo';
import Repos from '../components/Repos/Repos';
import { userFetch } from '../services/userFetch';
import { repoFetch } from '../services/repoFetch';


export default class MainContainer extends Component {
  state = {
    username: '',
    userDetails: {},
    repos: []
  }

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username } = this.state;
    Promise.all([
      userFetch(username),
      repoFetch(username)
    ])
      .then(([userDetails, repos]) => this.setState({ userDetails, repos }));
  }

  render() {
    const { username, userDetails, repos } = this.state;
    return (
      <>
        <ShortForm username={username} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <UserInfo userDetails={userDetails} />
        <Repos repos={repos} />
      </>
    );
  }
}

