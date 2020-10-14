import React from 'react';
import './App.css';

type Item = string;

interface AppState {
    list: Item[]
}

class App extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [
                '顔を洗う',
                'ベランダに出る',
                '陽を浴びる',
                'ストレッチor筋トレ',
                'コーヒーを淹れる',
                'ニュースを見る'
            ],
        }
    }

    handleKeyDownAddItem(item: Item) {
        const list = this.state.list.slice();
        list.push(item)
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <div className="App">
                <Form onKeyDown={(item: Item) => this.handleKeyDownAddItem(item)}/>
                <Todo list={this.state.list}/>
            </div>
        );
    }
}

interface ListProps {
    list: Item[]
}

function Todo(props: ListProps) {
    return (
        <div className="Todo">
            <ul>
                {props.list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
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
        }
    }

    render() {
        return (
            <div className="Form">
                <label>
                    <input
                        onKeyDown={(e) => this.handleKeyDown(e)}
                        className="inputTodo"
                    />
                </label>
            </div>
        );
    }
}

export default App;
