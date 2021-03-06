import React from 'react';import styled from 'styled-components';
import SelectedMove from '../selected-move';

const View = ({selectedMove}) => {
    return (
        <SelectedMove 
            title="Draw 平局"
            selectedMove={ selectedMove }/>
    )
}

export default View;
