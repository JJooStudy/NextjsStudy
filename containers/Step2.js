import React, { Component } from 'react';
import Container from 'components/Container';
import Title from 'components/Title';
import ButtonDiv from 'components/Button/ButtonDiv';
import * as Button from 'components/Button/Buttons';
import Inputs from 'components/Input/Inputs';
import SaveDeleteDiv from 'components/Button/SaveDeleteDiv';
import PhotoBox from 'components/Photo/PhotoBox';
import { gender } from 'common/db.js'

//구조 이미지부터 추가하기 버튼까지가 한 블럭
//추가하기 버튼 누를 시 그 블럭이 하나 추가 
//컴포넌트 정리 필요 

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
            <>
                <Container>
                    <PhotoBox/>
                    <ButtonDiv handleSelect={this.handleSelect} selected={selected} data={gender} />
                    <Inputs label="아이에 대한 설명을 작성해 주세요" />
                    <Inputs label="분양 금액을 입력해 주세요" />
                    <SaveDeleteDiv />
                    <Button.ButtonAdd><span>아이 추가하기</span></Button.ButtonAdd>
                    <Button.ButtonEnd>분양글 등록하기</Button.ButtonEnd>
                </Container>
            </>
        )
    }
}

export default Writing02;