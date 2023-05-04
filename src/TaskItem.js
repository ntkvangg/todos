import React, { Component } from 'react'

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            task: this.props.taskItem.task,
            isEditing: false
        };
    }

    handleDelete = ()=>{
        this.props.deleteTask(this.props.id);
    }

    setEditingState = (isEditing)=>{
        this.setState({isEditing: isEditing});
    }

    handleChangeTask = (e)=>{
        e.preventDefault();
        this.setState({task: e.target.value});
    }

    handleEdit = (e)=>{
        e.preventDefault();
        this.props.editTask(this.state.task, this.props.id);
        this.setEditingState(false);
    }

    changCompleteTask = (e)=>{
        e.preventDefault();
        this.props.toogleTask(this.props.id);
    }

    render() {
        return (
            <tr>
                {
                this.state.isEditing ? 
                <>
                    <td className="pe-2">
                        <form>
                            <input className="form-control" type="text" value={this.state.task} onChange={this.handleChangeTask}/>
                        </form>
                    </td>
                    <td>
                        <button className="btn btn-sm btn-success me-2" type="submit" onClick={this.handleEdit}>Save</button>
                        <button className="btn btn-sm btn-secondary" onClick={()=>this.setEditingState(false)}>Back</button>
                    </td>
                </>
                :
                <>
                    <td className="task-item" onClick={(e)=>this.changCompleteTask(e)}>
                        <input className="me-2" type="checkbox" checked={this.props.taskItem.isCompleted} readOnly></input>
                        <span className={this.props.taskItem.isCompleted ? 'text-completed': 'text-not-completed'}>
                            {this.props.taskItem.task}
                        </span>
                        
                        </td>
                    <td>
                        <button className="btn btn-sm btn-info me-2" onClick={()=>this.setEditingState(true)}>Edit</button>
                        <button className="btn btn-sm btn-danger" onClick={this.handleDelete}>Delete</button>
                    </td>
                </>
                
                
            }
            </tr>
        )
    }
}
