import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            num: []
        }
    }

    clearInputFields = (id) => {
        var list = document.querySelectorAll('.input-field input');
        var i;
        for (i = 0; i < list.length; ++i) {
            id ? list[id - 1].value = '' : list[i].value = '';
        }
    }


    handleKeyUp = (e, id) => {
        let value = e.target.value;
        let isNotNumber = isNaN(value);
        let valueLength = Array.from(value).length;
        let inputId = id;

        if (isNotNumber) {
            this.clearInputFields(inputId);
            alert('Please enter only number');
            return;
        }
        console.log(this.refs);


        if (valueLength == 3 && this.refs[inputId + 1]) {
            this.props.newNum(value);
            this.refs[inputId + 1].focus();
        }
    }

    renderInputs = (noOfInputs, data) => {
        let {seperator} = this.props;
        let inputs = [];

        if (!data) {
            this.clearInputFields(null);
        }

        for (let i = 1; i <= noOfInputs; i++) {
            inputs.push(
                <div key={i} className="input-field">
                    <input ref={i} type="text" maxLength="3" onKeyUp={(e) => this.handleKeyUp(e, i)} />
                    <span>{seperator}</span>
                </div>
            )
        }
        return inputs;
    }

    render() {
        const { noOfInputs, data} = this.props;

        return (
            <div className="input-component">
                {this.renderInputs(noOfInputs, data)}
            </div>
        )
    }
}

Input.propTypes = {
    noOfInputs: PropTypes.number,
    data: PropTypes.string,
    seperator: PropTypes.string
};


export default Input;   