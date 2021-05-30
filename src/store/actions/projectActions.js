export const createProject = (project) => {
  return (dispatch, getState) => {
    //make async call to database
    //thunk return function
    dispatch({ type: 'CREATE_PROJECT', project})
  }
};