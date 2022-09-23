import PropTypes from "prop-types";
import { Component } from "react";

class FilterSelect extends Component {

    render() {
        const handleChange = (e) => {
            this.props.setSelectedFilter(e.target.value);
        }
        return (
            <label htmlFor="filterReminders">
                Show tasks due:
                <select
                    id="filterReminders"
                    value={this.props.selectedFilter}
                    onChange={handleChange}
                >
                    <option value="2day">within 2 Days</option>
                    <option value="1week">within 1 Week</option>
                    <option value="30days">within 30 days</option>
                    <option value="all">any time</option>
                </select>
            </label>
        );
    }
}

FilterSelect.propTypes = {
    selectedFilter: PropTypes.string,
    setSelectedFilter: PropTypes.func,
};

FilterSelect.defaultProps = {
    selectedFilter: "all",
};

export default FilterSelect;