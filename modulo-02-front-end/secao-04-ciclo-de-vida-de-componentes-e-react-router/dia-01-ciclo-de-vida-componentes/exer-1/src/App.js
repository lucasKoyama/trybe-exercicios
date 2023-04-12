import React from 'react';
import User from './User';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      user: undefined,
      loading: true,
    }
  }

  componentDidMount() {
    this.setState({ loading: true }, 
      async () => {
        const solvedUser = await fetch('https://api.randomuser.me/');
        const userData = await solvedUser.json();
        this.setState({ user: userData, loading: false })
      })
  }

  // shouldComponentUpdate() {

  // }

  render() {
    const { user, loading } = this.state;
    const carregando = <div>Carregando...</div>;
    return (
      <div>{loading ? carregando : <User data={ user }/> }</div>
    );
  }
}

export default App;