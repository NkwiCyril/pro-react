import React from 'react';

import '../Styling/styles.css'

// making use of inline styling

const styles = {
    color: 'blue',
    fontSize: '24px',
    backgroundColor: 'yellow',
    padding: '10px',
    borderRadius: '5px',
}


function Inline (props) {
    // using an external stylesheet
    var classname = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={classname}>External</h1>
            <h1 style={styles}>Inline</h1>
        </div>
    );
}

export default Inline;
