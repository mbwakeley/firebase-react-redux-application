import React, { Component } from "react";
import { createNewProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createNewProject(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              onChange={this.handleChange}
              className="materialize-textarea"
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue darken-4 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

//when we call props.createproject and pass in a project, its going to run the function
//take in the project perform a dispatch and call the action creater(create project)
const mapDispatchToProps = dispatch => {
  return {
    createNewProject: project => dispatch(createNewProject(project))
  };
};
//null has to come first because there is no mapstatetoprops
export default connect(null, mapDispatchToProps)(CreateProject);
