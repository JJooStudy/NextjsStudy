import React, { Component } from 'react';
import Link from 'next/link';
import Container from 'components/Container';
import ButtonDiv from 'components/Button/ButtonDiv';
import Inputs from 'components/Input/Inputs';
import * as Button from 'components/Button/Buttons'

const animal =[
    {
        id:1,
        name : '강아지'
    },
    {
        id:2,
        name : '고양이'
    },
    {
        id:3,
        name : '기타동물'
    }
]
const vaccinationEtc = [
    {
        id:1,
        name : '종합접종'
    },
    {
        id:2,
        name : '광견병접종'
    },
    {
        id:3,
        name : '장염접종'
    },
    {
        id:4,
        name : '완구충'
    },
    {
        id:5,
        name : '부모확인'
    },
    {
        id:6,
        name : '용품증정'
    }
]
const date = [
    {
        id:1,
        name : '10일간 게시'
    },
    {
        id:2,
        name : '20일간 게시'
    }
]

class Writing01 extends Component {
    state = {
        selected: 0,
        selected2: 0,
        selected3: 0,
    }
    handleSelect = (selected) => {
        this.setState({selected})
    }
    handleSelect2 = (selected2) => {
        this.setState({selected2})
    }
    handleSelect3 = (selected3) => {
        this.setState({selected3})
    }
    render(){
        const { selected, selected2, selected3 } = this.state
        return(
            <Container>
                <ButtonDiv handleSelect={this.handleSelect} selected={selected} title="동물종류 *" data={animal}  />

                <Inputs label="품종을 입력해 주세요" />
                <Inputs label="생후 개월 수를 입력해 주세요" />

                <ButtonDiv handleSelect={this.handleSelect2} selected={selected2} title="접종 및 기타사항" subTitle="복수선택 가능" data={vaccinationEtc} />
                
                <Inputs title="분양 소개 및 설명 *" label="분양에 대한 설명을 작성해 주세요" />

                <ButtonDiv handleSelect={this.handleSelect3} selected={selected3} title="분양글 게시기간" data={date} />
                

                <Inputs title="분양위치 지정 *" label="분양하실 위치를 지정하세요" />
                
                <Link href="step2">
                    <Button.ButtonStep>
                        다음단계(아이정보입력)
                    </Button.ButtonStep>
                </Link>
            </Container>
        )
    }
}

export default Writing01;