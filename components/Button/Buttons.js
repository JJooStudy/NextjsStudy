import styled, {css} from 'styled-components';


export const Button = styled.button`
    flex:1 1 calc(33.33% - 10px);
    margin:0 5px;
    margin-bottom:7px;
    padding:7px 0;
    border:1px solid #000;
    color:gray;
    font-size:14px;
    border-radius:5px;
    background-color:#fff;
    ${props => props.active && css`
        color:#fff;
        background-color: #000;
    `}
    // 삭제 임시저장 버튼
    ${props => props.gray && css`
        border-color:#f1f1f1;
        // font-size:15px;
        font-weight:bold;
        background-color:#f1f1f1;
        :hover, :focus, :active {
            color:#fff;
            background-color:#000;
        }
    `}

`

export const ButtonStep = styled.button`
    display:block;
    width:90%;
    margin:0 auto;
    margin-top:30px;
    padding:7px 0;
    border-radius:5px;
    color:#fff;
    background-color:#000;
`