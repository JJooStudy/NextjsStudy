import styled, { css } from 'styled-components';

const Title = styled.h3`
    margin:20px 0 10px;
    font-size:16px;
    font-weight:normal;
    > span {
        font-size:14px;
        color:gray;
    }
    ${props => props.underLine && css`
        border-bottom:1px solid #f1f1f1;
    `}
`

export default Title;