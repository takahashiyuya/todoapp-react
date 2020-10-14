import React from 'react';
import Item from "./Interfaces/Item";

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
                           onKeyDown={(e) => this.handleKeyDown(e)}
                           placeholder="Input a todo"/>
                </label>
            </div>
        );
    }
}

export default Form;
