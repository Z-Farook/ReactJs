import { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
        this.setState({ count: this.state.count + 1 });
        /**The reason that the asynchronous nature of setState is important is that if you
         *  try to access state immediately after setting it, you may get the old value
         *  rather than the new value that you expect. */
        // console.log(this.state.count);
    }
    render() {
        return (
            <div>
                <p>The current count is: {this.state.count}.</p>
                <button onClick={() => { this.incrementCount() }}>
                    Add 1
                </button>
            </div>
        );
    }

}
export default Counter;