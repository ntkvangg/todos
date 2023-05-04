import React, { Component } from 'react'
import TaskItem from "./TaskItem";
export default class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Task
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.list.map((item, index)=>{
                            return <TaskItem key={index} id={index} taskItem={item} deleteTask={this.props.deleteTask} editTask={this.props.editTask} toogleTask={this.props.toogleTask}/>
                        })
                    }
                    
                </tbody>
            </table>
            
        </div>
        )
    }
}
