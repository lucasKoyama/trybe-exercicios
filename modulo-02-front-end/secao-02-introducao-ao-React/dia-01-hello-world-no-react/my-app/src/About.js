import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {'Lucas Koyama'}
        </h1>
        <p>
          {'Estudante da Trybe!'}
        </p>
        <h2>Minhas habilidades</h2>
        <ul>
          <li>{'HTML'}</li>
          <li>{'CSS'}</li>
          <li>{'JS'}</li>
        </ul>
      </div>
    );
  }
}

export default About;