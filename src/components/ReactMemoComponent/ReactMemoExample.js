import React from "react";

function ReactMemoExample(props) {
    return (
        <>
            <p>
                Hi, {props.firstName}. This component returns the same thing when given
                the same props.
            </p>

        </>
    );
}
//When you wrap your function component in React.memo()
export default React.memo(ReactMemoExample); 