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

    render() {
        return (
            <div className="App">
                <Form/>
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

class Form extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    handleKeyDown(e: any) {
        const enterKeyCode = 13;
        if (e.keyCode === enterKeyCode) {
            console.log(this.props)
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
