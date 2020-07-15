import React, { Component } from 'react';
import Container from 'components/Container';
import ButtonDiv from 'components/Button/ButtonDiv';
import Inputs from 'components/Input/Inputs';
import SaveDeleteDiv from 'components/Button/SaveDeleteDiv';

const gender = [
    {
        id:1,
        name : '남아'
    },
    {
        id:2,
        name : '여아'
    }
]

class Writing02 extends Component {
    state = {
        selected: 0,
    }
    handleSelect = (selected) => {
        this.setState({selected})
    }
    render(){
        const { selected } = this.state
        return(
            <Container>
                <ButtonDiv handleSelect={this.handleSelect} selected={selected} data={gender} />
                <Inputs label="아이에 대한 설명을 작성해 주세요" />
                <Inputs label="분양 금액을 입력해 주세요" />
                <SaveDeleteDiv />
                <button></button>
            </Container>
        )
    }
}

export default Writing02;