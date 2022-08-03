import React from "react";
/**
 * Another way to accomplish the same thing as the code in Listing 4‑34 
 * is to WRITE YOUR CLASS COMPONENT by extending React.PureComponent 
 * instead of React.Component
 */

class PureComponentExample extends React.PureComponent {
    render() {
        return (
            <>
                <div>foo</div>

            </>
        );
    }
}

export default PureComponentExample;