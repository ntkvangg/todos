import React, { Component } from 'react'

export default class CreateTask extends Component {

    constructor(props) {
        super(props);

        this.state={
            task:""
        };
    
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = ()=>{
        this.props.createTask(this.state.task);
        this.setState({task: ''});
    }

    handleEnter = (e)=>{
        if(e.charCode === 13 && !!this.state.task){
            this.handleSubmit();
        }
    }

    isDisabled = (e)=>{
        return !!this.state.task
    }

  render() {
    return (
      <div className="d-flex">
        <input className="form-control me-2" type="text" name="task" value={this.state.task} onChange={this.handleChange} onKeyPress={this.handleEnter} placeholder="Enter task" autoFocus/>
        <button className={`btn btn-primary ${!this.isDisabled() ? 'disabled' : ''}`} type="submit" onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}
