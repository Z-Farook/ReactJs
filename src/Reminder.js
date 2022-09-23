import { Component } from 'react';
import PropTypes from "prop-types";
class Reminder extends Component {

    /**
     * js object notation syntax for  method definition 
     * Note it is defined outside the class render method 
     * If you use this you will have to call it like this in the input onChange event:
     * ########     onChange={this.handleDateChange.bind(this)}   ########
     *    handleChange() {
          this.props.setIsComplete(!this.props.isComplete, this.props.id);
      } */

    render() {
        
        const handleChange = () => {
            this.props.setIsComplete(!this.props.isComplete, this.props.id);
        }

        return (
            <div>
                item: {this.props.reminderText}&nbsp;due date: {this.props.dueDate}
                &nbsp;Completed?:{" "}
                <input
                    type="checkbox"
                    checked={this.props.isComplete}

                    onChange={handleChange}
                />
            </div>
        );
    }
}

Reminder.propTypes = {
    itemText: PropTypes.string,
    dueDate: PropTypes.string,
    isComplete: PropTypes.bool,
};

const date = new Date();
const formattedDate = date.toISOString().substr(0, 10);

Reminder.defaultProps = {
    reminderText: "No Reminder Set",
    dueDate: formattedDate,
    status: false,
};
export default Reminder;