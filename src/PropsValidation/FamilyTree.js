import { Component } from "react";
import { PropTypes } from "prop-types";
import {Person} from "../UtilFiles/Person";

class FamilyTree extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>FamilyTree dad name: {this.props.father.firstName}</h1>
                </div>
                {/* {console.log( this.props.constructor.name)} */}
            </>
        );
    }
}

FamilyTree.propTypes = {
    // JavaScript Class Validation
    father: PropTypes.instanceOf(Person).isRequired,
    // Element Type Validation
    pet: PropTypes.elementType,
};

export default FamilyTree;