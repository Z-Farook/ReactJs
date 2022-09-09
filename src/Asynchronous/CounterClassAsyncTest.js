import { Component } from 'react';
class CounterClassAsyncTest extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        this.testCount = 0;
        this.incrementTwice = this.incrementTwice.bind(this);
    }
    incrementTwice() {
        this.setState({ count: this.state.count + 1 })
        this.testCount++;
        this.setState({ count: this.state.count + 1 });
        this.testCount++;
        console.log("Count should be: " + this.testCount);
    }
    render() {
        return (
            <>
            <p>Button with <b>Async</b> <cod>setSate nature</cod> and wrong output!!!</p>
                <button onClick={this.incrementTwice}>{this.state.count}</button>
                <hr></hr>
            </>

        );
    }
}

export default CounterClassAsyncTest;