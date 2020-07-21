import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Title from 'components/Title'


class PhotoBox extends Component {
    state = {
        display:true
    }
    render(){
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
            <Slider {...setting}>
                <ImgItem>
                    <div>
                        이미지
                        <button>+</button>
                    </div>
                </ImgItem>
                <ImgItem>
                    <div>
                        이미지
                        <button>+</button>
                    </div>
                </ImgItem>
                <ImgItem>
                    <div>
                        이미지
                        <button>+</button>
                    </div>
                </ImgItem>
                <ImgItem>
                    <div>
                        이미지
                        <button>+</button>
                    </div>
                </ImgItem>
                <ImgItem>
                    <div>
                        이미지
                        <button>+</button>
                    </div>
                </ImgItem>
            </Slider>
        )
    }
}
export default PhotoBox;

const ImgItem = styled.div`
    > div {
        width:140px;
        height:140px;
        // margin-right:20px;
        border-radius:5px;
        background-color:#f1f1f1;
        > button {
            width:30px;
            height:30px;
            margin-left:10px;
            border: 1px solid #ddd;
        }
    }
`