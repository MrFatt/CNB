import React from 'react';
const View = ({selectedMove}) => {
    return (
        <React.Fragment>
            <p>YOU LOSE!</p>
            <p>你输了</p>
            <p><span role="img" aria-label="crying face">😭</span></p>
        </React.Fragment>
    )
}

export default View;
