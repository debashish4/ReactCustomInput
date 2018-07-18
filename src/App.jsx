import React from 'react';
import Input from './components/Input';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            address: "192.168.2.1",
            seperator:'.'
        }
    }

    handleClear = (e) => {
        this.setState({
            address: '',
        })
    }

    updateAddress = (newVal) => {
        this.setState({
            address: newVal
        })
    }

    render() {
        return (
            <div >
                <h2>Enter IP Address</h2>
                <Input seperator={this.state.seperator} newNum={this.updateAddress} noOfInputs={4} data={this.state.address} />
                <button onClick={this.handleClear}>Clear</button>
            </div>
        )
    }
}

export default App;