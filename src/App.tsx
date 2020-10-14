import React from 'react';
import './App.css';

type Todo = string;

interface Item {
    todo: Todo,
    done: boolean,
}

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

    handleClickItem(i: number, item: Item) {
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
                      onClick={(i: number, item: Item) => this.handleClickItem(i, item)}/>
            </div>
        );
    }
}

interface ListProps {
    list: Item[]
}

class List extends React.Component<any, any> {
    constructor(props: ListProps) {
        super(props);
    }

    handleClick(i: number, item: Item) {
        this.props.onClick(i, item)
    }

    render() {
        return (
            <div className="List">
                <ul>
                    {this.props.list.map((item: Item, i: number) => (
                        <li key={i}>
                            <label onClick={() => this.handleClick(i, item)}>
                                <input type="checkbox"
                                       defaultChecked={item.done}
                                />
                                {item.todo}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

interface FormProps {
    list: Item[],
    onKeyDown: any
}

class Form extends React.Component<any, any> {
    constructor(props: FormProps) {
        super(props);
    }

    handleKeyDown(e: any) {
        const enterKeyCode = 13;
        if (e.keyCode === enterKeyCode) {
            this.props.onKeyDown(e.currentTarget.value)
            e.currentTarget.value = '';
        }
    }

    render() {
        return (
            <div className="Form">
                <label>
                    <input className="inputTodo"
                           onKeyDown={(e) => this.handleKeyDown(e)}/>
                </label>
            </div>
        );
    }
}

export default App;
