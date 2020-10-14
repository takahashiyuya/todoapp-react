import React from 'react';
import Item from "./Interfaces/Item";
import './Progress.css';

interface ProgressProps {
    list: Item[]
}

class Progress extends React.Component<any, any> {
    constructor(props: ProgressProps) {
        super(props);
    }

    render() {
        return (
            <div className="Progress">
                {this.props.list.filter((item: Item) => {
                    return !item.done;
                }).length} items left.
            </div>
        );
    }
}

export default Progress;
