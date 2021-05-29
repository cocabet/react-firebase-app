import React, { useState } from 'react'

const CreateProject = () => {

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
    console.log(state);
  }

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

export default CreateProject;
