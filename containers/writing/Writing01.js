import React, { Component } from 'react';
import Link from 'next/link';
import Container from 'components/Container';
import ButtonDiv from 'components/Button/ButtonDiv';
import Inputs from 'components/Input/Inputs';
import * as Button from 'components/Button/Buttons'
// import db from 'common/db';

const animal =[
    {
        id:1,
        name : '강아지',
        type : 'only'
    },
    {
        id:2,
        name : '고양이',
        type : 'only'
    },
    {
        id:3,
        name : '기타동물',
        type : 'only'
    }
]
const vaccinationEtc = [
    {
        id:1,
        name : '종합접종',
        type : 'multiple'
    },
    {
        id:2,
        name : '광견병접종',
        type : 'multiple'
    },
    {
        id:3,
        name : '장염접종',
        type : 'multiple'
    },
    {
        id:4,
        name : '완구충',
        type : 'multiple'
    },
    {
        id:5,
        name : '부모확인',
        type : 'multiple'
    },
    {
        id:6,
        name : '용품증정',
        type : 'multiple'
    }
]
const date = [
    {
        id:1,
        name : '10일간 게시',
        type : 'only'
    },
    {
        id:2,
        name : '20일간 게시',
        type : 'only'
    }
]

class Writing01 extends Component {
    state = {
        selected: 0,
        selected2: [],
        selected3: 0,
    }

    // addData () = {
    //     db.push({...});
    // }
    handleSelect = (selected) => {
        this.setState({selected})
    }
    handleSelect2 = (selected2) => {
        console.log('1111',selected2)
        // 선택된 element를 가져와서 기존 리스트에 있는지 확인해서
        // if 없으면 넣고
        // if 있으면 빼고

        const currentData = this.state.selected2
        console.log('state',currentData)
        // []. [1]
        currentData.push(selected2)
        // [1]. [2]
        this.setState({selected2: currentData})
        console.log('22222',selected2)
    }
    handleSelect3 = (selected3) => {
        this.setState({selected3})
    }

    //변수 이름짓기
    // - 1, 2 쓰지않고 해당 섹션의 의미를 변수를 보고 이해 할 수있게
    // - div등 html이름 에서 벗어나기
    
    render(){
        const { selected, selected2, selected3 } = this.state
        console.log('writing :',selected2)
        let list = [];
        list.push(selected2)
    
        console.log(list)
        return(
            <Container>
                <ButtonDiv handleSelect={this.handleSelect} selected={selected} title="동물종류 *" data={animal}  />

                <Inputs label="품종을 입력해 주세요" />
                <Inputs label="생후 개월 수를 입력해 주세요" />

                <ButtonDiv handleSelect={this.handleSelect2} selected={selected2} title="접종 및 기타사항" subTitle="복수선택 가능" data={vaccinationEtc} />
                
                <Inputs title="분양 소개 및 설명 *" label="분양에 대한 설명을 작성해 주세요" />

                <ButtonDiv handleSelect={this.handleSelect3} multiple={true} selected={selected3} title="분양글 게시기간" data={date} />
                

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