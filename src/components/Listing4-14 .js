import { Component } from 'react';
class BasicFigure extends Component {
    render() {
        return (
            <figure>
                <img src={this.props.filename} alt={this.props.caption} />
                <figcaption>{this.props.caption}</figcaption>
            </figure>
        );
    }
}
export default BasicFigure;