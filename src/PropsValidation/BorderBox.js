import PropTypes from 'prop-types';
function BorderBox(props) {
    return (
        <div style={{ border: "1px solid black" }}>{props.children}</div>
    )
}
BorderBox.propTypes = {
    // Validating React Elements
    children: PropTypes.element.isRequired
}
BorderBox.propTypes = {
    // Validating React Elements
    children: PropTypes.element.isRequired
}
export default BorderBox;