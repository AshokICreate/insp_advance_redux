import React, { Component } from "react";
import { connect } from "react-redux";
import TasksPage from "./components/TasksPage";
import { createTask } from "./actions/actions.js";

/*
const App = (props) => (
  <div className="main-content">
    <TasksPage tasks={props.mockTasks} />
  </div>
)
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.createTask = this.createTask.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  createTask(event) {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    this.props.dispatch(createTask({ title, description }));
  }

  onTitleChange(event) {
    const title = event.target.value;
    this.setState({ title: title });
  }

  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState({ description: description });
  };

  render() {
    console.log("Inside App Component Log this.props", this.props);
    return (
      <div className="main-content">
        <form onSubmit={this.createTask}>
          <input
            className="full-width-input"
            onChange={this.onTitleChange}
            value={this.state.title}
            type="text"
            placeholder="title"
          />
          <input
            className="full-width-input"
            onChange={this.onDescriptionChange}
            value={this.state.description}
            type="text"
            placeholder="description"
          />
          <button className="button" type="submit">
            Save
          </button>
        </form>
        <TasksPage tasks={this.props.mockTasks} />
      </div>
    );
  }
}

const mapStateToProps = () => (state, ownProps) => {
  return {
    mockTasks: state
  };
};

export default connect(mapStateToProps)(App);
