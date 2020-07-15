import React, { Component } from 'react';
import Title from '../Title';
import InputLabel from './Input';


class Inputs extends Component {
    render(){
        const { title, subTitle, label } = this.props
        return(
            <>
                {title && <Title>{title}<span>{subTitle}</span></Title>}
                <InputLabel>
                    <input type="text" placeholder={label} />
                </InputLabel>
            </>
        )
    }
}

export default Inputs;