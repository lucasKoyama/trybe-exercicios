import React from "react";

class User extends React.Component {
  render() {
    const { picture: { large }, name, email, dob: { age } } = this.props.data.results[0];
    return(
      <>
        <img src={ large } alt={ name.first }/>
        <h2>{ name.first }</h2>
        <h2>{ email }</h2>
        <h2>{ age }</h2>
      </>
    );
  }
}

export default User;