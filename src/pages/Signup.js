import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authActions';
import { Redirect } from 'react-router-dom';

function Signup(props) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  function handleOnChange(event) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }
  function handleOnSubmit() {
    props.signup(credentials.email, credentials.password);
  }

  
  if (props.auth.isLoaded === false) {
    return <h1>Loading...</h1>;
  }

  
  if (props.auth.isEmpty === false) {
    return <Redirect path="/" />;
  }

  return (
    <div>
      <form>
        <h1>Sign up</h1>
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
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseState.auth,
  };
};

const mapDispatchToProps = { signup };
export default connect(mapStateToProps, mapDispatchToProps)(Signup);