import { Component } from "react";
class CounterClass2 extends Component {
    constructor(props) {
        super(props);
        this.state = { count1: 0, count2: 0 };
        this.increment1 = this.increment1.bind(this);
        this.increment2 = this.increment2.bind(this);
    }
    increment1() {
        this.setState({ count1: this.state.count1 + 1 })
    }
    increment2() {
        this.setState({ count2: this.state.count2 + 1 })
    }
    render() {
        return (
            <>
            <button onClick={this.increment1}>Count1: {this.state.count1}</button>
            <button onClick={this.increment2}>Count2: {this.state.count2}</button>
            </>
        );
    }
}
export default CounterClass2;
