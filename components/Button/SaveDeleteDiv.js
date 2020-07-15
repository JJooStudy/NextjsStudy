import React, { Component } from 'react';
import styled from 'styled-components';
import * as Button from './Buttons';

class SaveDeleteDiv extends Component {
    render(){
        return(
            <SaveDeleteBox>
                <Button.Button gray>삭제</Button.Button>
                <Button.Button gray>임시저장</Button.Button>
            </SaveDeleteBox>
        )
    }
}

export default SaveDeleteDiv;

const SaveDeleteBox = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width:calc(100% + 20px);
    margin:10px 0;
    margin-left:-10px;
    box-sizing:border-box;
    padding:0 10px;
`