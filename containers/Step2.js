import React, { Component } from 'react';
import Container from 'components/Container';
import Title from 'components/Title';
import * as Button from 'components/Button/Buttons';
import PetItem from 'components/PetItem/PetItem';

//구조 이미지부터 추가하기 버튼까지가 한 블럭
//추가하기 버튼 누를 시 그 블럭이 하나 추가 
//컴포넌트 정리 필요 

class Step2 extends Component {
    state = {
        // selected: 0,
        petItem : [
            {id:0, gender: 1}
        ]
    }
    handleSelect = (gender, selectpetID) => {
        // const { petItem } = this.state
        // this.state = { petItem : [{id:0, gender: 1}] }
        // const genderSelect = Object.assign([], this.state.petItem)
        // const genderSelect = [...this.state.petItem]
        // const petItemID = genderSelect.length -1

        // genderSelect.push({gender:gender})
        // this.setState({gender:gender})
        
        console.log('selectpetID : ', selectpetID)//누른 버튼의 petItem id 값
        console.log('gender : ', gender)//누른버튼의 성별
        // console.log('genderSelect : ', genderSelect)
        // console.log('genderSelect.length : ', genderSelect.length)

        // genderSelect.splice(2, 1, gender)
        const list = this.state.petItem
        for(var item of list) {
            if(item.id === selectpetID) {
                item.gender = gender
            }
            console.log(item);
        }
        console.log(list)
        this.setState({
            petItem : list
        })
        
    }
    addPetItem = () => {
        const copyPetItem = Object.assign([], this.state.petItem);
        console.log('copyPetItem', copyPetItem)
        if(copyPetItem.length === 0){
            copyPetItem.push({id:0})
            this.setState({petItem:copyPetItem})
        }else{
            copyPetItem.push({id:copyPetItem.length,  gender: 1})
            this.setState({petItem:copyPetItem})
        }
    }
    render(){
        const { petItem } = this.state
        return(
            <>
                <Container>
                    {
                        petItem.map((pet) => {
                            return <PetItem handleSelect={this.handleSelect} selected={pet.gender} pet={pet} key={pet.id} />
                        })
                    }
                    {/* <PetItem handleSelect={this.handleSelect} selected={selected}/> */}
                    <Button.ButtonAdd onClick={() => this.addPetItem()}><span>아이 추가하기</span></Button.ButtonAdd>
                    <Button.ButtonEnd>분양글 등록하기</Button.ButtonEnd>
                </Container>
            </>
        )
    }
}

export default Step2;