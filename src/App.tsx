import React from 'react';
import './App.css';
import Item from "./Interfaces/Item";
import Todo from "./Types/Todo";
import Form from "./Form";
import List from "./List";

interface AppState {
    list: Item[]
}

class App extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [
                {todo: '顔を洗う', done: true},
                {todo: 'ベランダで陽を浴びる', done: false},
                {todo: 'コーヒーを淹れる', done: false},
            ],
        }
    }

    handleKeyDownAddItem(todo: Todo) {
        const list = this.state.list.slice(),
            item = {todo: todo, done: false};
        list.push(item)
        this.setState({
            list: list
        })
    }

    handleChangeDone(i: number, item: Item) {
        const list = this.state.list.slice();
        list[i] = {todo: item.todo, done: !item.done};
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <div className="App">
                <Form onKeyDown={(todo: Todo) => this.handleKeyDownAddItem(todo)}/>
                <List list={this.state.list}
                      onChange={(i: number, item: Item) => this.handleChangeDone(i, item)}/>
            </div>
        );
    }
}

export default App;
