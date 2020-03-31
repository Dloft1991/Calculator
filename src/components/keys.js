import React from 'react';
import './keys.css';

function Keys(props) {
    function Test() {
        console.log(props.value)
        document.getElementById("display").innerHTML = props.value;
      } 
    return (
        <button onClick={Test} className="keys">
            {props.value}
        </button>
    )
}


function Values() {
    return (
        <div>
            <div id="display"></div>
            <div className="row">
                <div className="col-sm-4">
                <ul>
                <li><Keys value="3"/></li>
                <li><Keys value="2"/></li>
                <li><Keys value="1"/></li>
                </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                <ul>
                <li><Keys value="6"/></li>
                <li><Keys value="5"/></li>
                <li><Keys value="4"/></li>
                </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                <ul>
                <li><Keys value="9"/></li>
                <li><Keys value="8"/></li>
                <li><Keys value="7"/></li>
                </ul>
                </div>
            </div>
        </div>
    )
}
export default Values;