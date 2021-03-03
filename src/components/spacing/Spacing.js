import React from 'react';

function Spacing(props) {
    return (
        <div
            style={{
                width: '100%',
                height: props.space + 'rem',
                overflow: 'hidden',
            }}
        >
            &nbsp;
        </div>
    );
}

export default Spacing;
