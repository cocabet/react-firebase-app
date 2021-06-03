import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { createProject } from '../../store/actions/projectActions';

const CreateProject = (props) => {

  const [state, setState] = useState({
    title: "",
    content: "",
  });
  
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject(state);
  }

  const { auth } = props;
  if(!auth.uid) return <Redirect to="/signin" />

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new project In</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea name="content" cols="30" rows="10" className="materialize-textarea" onChange={handleChange}></textarea>        
        </div>
        <div>
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
