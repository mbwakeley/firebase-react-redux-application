import React from "react";

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  console.log("props", props);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem Ipsum Dolor sit amet consectetur</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Mark W</div>
          <div>March 30th 9AM</div>
        </div>
      </div>
    </div>
  );
}
