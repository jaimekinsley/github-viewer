import React, { Component } from 'react';
import ShortForm from '../components/ShortForm/ShortForm';
import UserInfo from '../components/UserInfo/UserInfo';
import Repos from '../components/Repos/Repos';
import { userFetch } from '../services/userFetch';
import { repoFetch } from '../services/repoFetch';


export default class MainContainer extends Component {
  state = {
    username: '',
    userInfo: {},
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
      .then(([userInfo, repos]) => this.setState({ userInfo, repos }));
  }

  render() {
    const { username, userInfo, repos } = this.state;
    return (
      <>
        <ShortForm username={username} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <UserInfo userInfo={userInfo} />
        <Repos repos={repos} />
      </>
    );
  }
}

