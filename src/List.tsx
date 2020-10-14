import React from 'react';
import './App.css';
import Item from "./Interfaces/Item";

interface ListProps {
    list: Item[]
}

class List extends React.Component<any, any> {
    constructor(props: ListProps) {
        super(props);
    }

    handleChange(i: number, item: Item) {
        this.props.onChange(i, item)
    }

    render() {
        return (
            <div className="List">
                <ul>
                    {this.props.list.map((item: Item, i: number) => (
                        <li key={i}>
                            <label onChange={() => this.handleChange(i, item)}>
                                <input type="checkbox"
                                       defaultChecked={item.done}/>
                                <span className={item.done ? 'done' : ''}>{item.todo}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;
