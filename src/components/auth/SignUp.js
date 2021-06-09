import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signUp } from '../../store/actions/authActions'

const SignUp = (props) => {

  const [state, setState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp(state);
  }
  
  const { auth, authError } = props;
  if(auth.uid) return <Redirect to="/" />

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange}/>
        </div>        
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" onChange={handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" onChange={handleChange}/>
        </div>
        <div>
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
