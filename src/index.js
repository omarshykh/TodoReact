import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Item from './components/Item.js'
import TodoForm from './components/TodoForm.js'

class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            names:[
            ],
            currentTask:""
        }
        this.updateTask=this.updateTask.bind(this);
        this.addTask=this.addTask.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.deleteAll=this.deleteAll.bind(this);
    }
    
    deleteAll(){
        let names=[];
        this.setState({
            names
        })
    }
    deleteTask(index){
        let names=this.state.names;
        names.splice(index,1);
        this.setState({
            names
        })
    }
    updateTask(newValue){
        this.setState({
            currentTask:newValue.target.value
        });
    }
    addTask(evt){
        evt.preventDefault();
        let names = this.state.names;
        let currentTask=this.state.currentTask;
        if(currentTask===""){
            alert("Please enter any data you leave it empty!!");
        }
        else{
              names.push({
            name:currentTask
        });
        this.setState({
            names,
            currentTask:""
        })
        }
    }
    render() {
        return (<section>
            <TodoForm 
            currentTask={this.state.currentTask} 
            updateTask={this.updateTask}
            addTask={this.addTask}
            deleteAll={this.deleteAll}/>
            <ul>
                {
                    this.state.names.map((nameList, index) => {
                        return <Item glass="items" key={nameList.name} deleteTask={this.deleteTask} index={index} detail={nameList} />
                    })
                }

            </ul>
        </section>)
    }
}



ReactDOM.render(<Todo/>,document.getElementById('root'));
