import React from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
class Main extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
        if(tasks.length){
            this.setState({tasks: tasks});
        }
    }

    componentDidUpdate(){
        // console.log(this.state.tasks);
    }

    handleCreateTask = (task)=>{
        tasks.push({task, isCompleted: false});
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.setState({tasks: tasks});
    }

    deleteTask = (id)=>{
        tasks.splice(id, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.setState({tasks: tasks});
    }

    editTask = (task, id)=>{
        tasks[id].task = task;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.setState({tasks: tasks});
    }
    
    changCompleteTask = (TaskId)=>{
        const item = tasks[TaskId];
        item.isCompleted = !item.isCompleted;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.setState({tasks: tasks});
    }
    render(){

        return(
            <div className="main">
                <h3>Todos</h3>
                <div className="content">
                    <CreateTask createTask={this.handleCreateTask}/>
                    <br/>
                    <TaskList list={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} toogleTask={this.changCompleteTask}/>
                </div>
                
            </div>
        )
    }
}

export default Main;