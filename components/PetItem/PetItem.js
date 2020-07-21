import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Title from 'components/Title';
import ButtonDiv from 'components/Button/ButtonDiv';
import PhotoBox from 'components/PetItem/PhotoBox';
import Inputs from 'components/Input/Inputs';
import SaveDeleteDiv from 'components/Button/SaveDeleteDiv';
import { gender } from 'common/db.js';


class PetItem extends Component {
    state = {
        display:true
        
    }
    render(){
        const { handleSelect, selected, pet } = this.props
        console.log("selected : ",selected)
        const setting = {
            dots: false,
            infinite:false,
            arrow:false,
            initialSlide: 0,
            speed:500,
            slidesToShow:3.2,
            slidesToScroll:1,
        }
        return (
            <>
                <Title underLine onClick={() => this.setState({display: !this.state.display})}>아이 {pet.id+1} 정보 *</Title>
                <div style={{
                        display: this.state.display ? "block" : "none"
                    }}
                >
                    <PhotoBox />
                    <ButtonDiv handleSelect={handleSelect} selected={selected} data={gender} />
                    <Inputs label="아이에 대한 설명을 작성해 주세요" />
                    <Inputs label="분양 금액을 입력해 주세요" />
                    <SaveDeleteDiv />
                </div>
            </>
        )
    }
}
export default PetItem;
