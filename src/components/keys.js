import React from 'react';
import './keys.css';

function Keys(props) {
    return (
        <div className="keys">
            {props.value}
        </div>
    )
}

function Values() {
    return (
        <div>
            <Keys value="1" />
            <Keys value="2" />
        </div>
    )
}
export default Values;