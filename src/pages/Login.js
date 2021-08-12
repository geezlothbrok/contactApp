import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/authActions';

function Login(props) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  console.log(props.auth);
  function handleOnChange(event) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }
  function handleOnSubmit() {
    props.login(credentials.email, credentials.password);
  }

  
  if (props.auth.isLoaded === false) {
    return <h1>Loading...</h1>;
  }

  
  if (props.auth.isEmpty === false) {
    return <Redirect path="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleOnChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleOnChange} />
        </div>

        <div>
          <button type="button" onClick={handleOnSubmit}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
const mapDispatchToProps = { login };
const mapStateToProps = (state) => {
  return {
    auth: state.firebaseState.auth,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);