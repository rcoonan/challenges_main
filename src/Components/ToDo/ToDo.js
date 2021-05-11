import React, { Component } from 'react';
import {Container} from 'reactstrap';

class ToDoList extends Component {
  constructor(props){
      super(props);
      this.state = {
          ToDo: [""],
          newToDo: "",
      };
      this.addToDo = this.addToDo.bind(this);
  }

  addToDo(event) {
      event.preventDefault();
      this.setState({
          ToDo: [...this.state.ToDo, this.state.newToDo],
          newToDo: "",
      });
  }

  changeHandler(event) {
      this.setState({ newToDo: event.target.value});
  }

  render() {
      return(
          <div className="main">
              <div className="mainDiv">
                  <form onSubmit={this.addToDo}>
                      <input type="text" 
                      value={this.state.newToDo}
                      onChange={(event) => this.changeHandler(event)}/>
                      <button type="submit">Add To Do</button>
                  </form>
                  <ToDo toDos={this.state.ToDo} />
              </div>
          </div>
      );
  }
}
  class ToDo extends Component {
      render() {
          return (
              <div>
                  {this.props.toDos.map((fruit) => {
                      return <Fruit passingFruit={fruit} />
                  })}
              </div>
          );
      }
  }

  const Fruit = (props) => {
      return (
          <div>
              <h3>{props.passingFruit}</h3>
          </div>
      );
  };

export default ToDoList;

// const ToDo = () => {
//   return(
//     <Container className="App">
//      <br />
//        <h1 className="App-intro">
//      In this challenge your goal is to create a to do list: 
//        </h1>
//        <hr />
//        <ul>
//          <li>
//            ability to accept a task from a user
//          </li>
//          <li>
//             ability to add this to the state
//          </li>
//          <li>
//             ability to display all of the tasks
//          </li>
//          <li>
//             ability to evaluated if a task was completed and update the state
//          </li>
//        </ul>
//        <hr />
//      </Container>
//   );
// };

// export default ToDo