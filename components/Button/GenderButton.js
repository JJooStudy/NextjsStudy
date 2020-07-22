import React, { Component } from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import * as Button from './Buttons';



class ButtonDiv extends Component {
    render(){
        const { title, subTitle, data , handleSelect, selected, pet } = this.props
        return(
            <>
                <Title>{title}<span>{subTitle}</span></Title>
                <ButtonWrap>
                    {
                        data.map((item, idx) => {
                            // console.log('selected:',selected)
                            // console.log('pet id:',pet.id)
                            return (
                                <Button.Button onClick={() => handleSelect(item.id, pet.id)} active={selected === item.id} key={idx}>{item.name}</Button.Button>
                            )
                        })
                    }
                </ButtonWrap>
            </>
        )
    }
}

export default ButtonDiv;

const ButtonWrap =styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width:calc(100% + 20px);
    margin:10px 0;
    margin-left:-10px;
    box-sizing:border-box;
    padding:0 10px;
`



