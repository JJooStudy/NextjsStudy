import React, { Component } from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import * as Button from './Buttons';



// class ButtonDiv extends Component {
//     render(){
//         const { title, subTitle, data , handleSelect, selected, multiple } = this.props
//         // var multiList = [
//         //     
//         // ]
//         // console.log(this.props.data)
//         // const active = multiple
//         //         ? selected.includes(item.id)
//         //         : selected === item.id
//         return(
//             <>
//                 <Title>{title}<span>{subTitle}</span></Title>
//                 <ButtonWrap>
//                     {
//                         data.map((item, idx) => {
//                             // console.log(multiple)
//                             return (
//                                 <Button.Button onClick={() => handleSelect(item.id)} active={selected === item.id} key={idx}>{item.name}</Button.Button>
//                             )
//                         })
//                     }
//                 </ButtonWrap>
//             </>
//         )
//     }
// }


//Writing01.js에서 props를 받아야서 처리할때
class ButtonDiv extends Component {
    render(){
        const { title, subTitle, data , handleSelect, selected } = this.props
        return(
            <>
                {title && <Title>{title}<span>{subTitle}</span></Title>}
                <ButtonWrap>
                    {
                        data.map((item, idx) => {
                            console.log(selected)
                            return (
                                <Button.Button onClick={() => handleSelect(item.id)} active={selected === item.id} key={idx}>{item.name}</Button.Button>
                            )
                        })
                    }
                </ButtonWrap>
            </>
        )
    }
}


// buttonDiv.js 안에서 state props 처리할때
// class ButtonDiv extends Component {
//     state = {
//         selected: 0,
//     }
//     render(){
//         const { selected } = this.state
//         const { title, data } = this.props
//         return(
//             <>
//                 <h3>{title}</h3>
//                 <ButtonWrap>
//                 {
//                     data.map((item, idx) => {
//                         console.log('active:', selected === item.id,'selected:',selected )
//                         return (
//                             <button onClick={() => this.setState({selected: item.id})} active={selected === item.id} key={idx}>{item.name}</button>
//                         )
//                     })
//                 }
//                 </ButtonWrap>
//             </>
//         )
//     }
// }

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



// 1. data = [] 일 떄, id 1을 선택하면
// - data = [1]
// - button 에서 1이 active 되어야함 -> data.includes(1) --> true, false

// 2. data = [1] 일 떄, id 2을 선택하면
// - data = [1, 2]
// - button 에서 1, 2가 active 되어야함 -> data.includes(1) --> true, false
// data.includes(1)
// data.includes(2)

// 2. data = [1, 2] 일 떄, id 2을 선택하면
// - data = [1]
