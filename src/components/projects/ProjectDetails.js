const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span>Project Title - {id}</span>
          <p>Lorem sadasdasd asdasdasd asdasdasda asdasdasdd asdasda</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
