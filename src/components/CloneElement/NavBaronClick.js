import React from 'react';
export default function NavBaronClick(props) {
    return (
        <div>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, {
                    onClick: props.onClick
                })
            })}
        </div>
    )
}
