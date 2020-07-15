import styled, {css} from 'styled-components';


export const Button = styled.button`
    flex:1 1 calc(33.33% - 10px);
    margin:0 5px;
    margin-bottom:7px;
    padding:7px 0;
    box-sizing:border-box;
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
// 다음단계로 넘어가기
export const ButtonStep = styled.button`
    display:block;
    width:calc(100% - 20px);
    margin:0 auto;
    margin-top:30px;
    margin-bottom:30px;
    padding:7px 0;
    border-radius:5px;
    color:#fff;
    background-color:#000;
`
//아이 추가 
export const ButtonAdd = styled.button`
    display:block;
    width:calc(100% - 30px);
    margin:20px auto;
    padding:10px 0;
    :hover, :focus, :active{
        background-color:#f1f1f1;
    }
    > span {
        display:inline-block;
        position:relative;
        padding-left:30px;
        ::before {
            content:'';
            display:block;
            position:absolute;
            top:4px;
            left:4px;
            width:3px;
            height:11px;
            background-color:#000;
        }
        ::after {
            content:'';
            display:block;
            position:absolute;
            top:8px;
            left:0;
            width:11px;
            height:3px;
            background-color:#000;
        }
    }
    
`
//마지막 등록하기
export const ButtonEnd = styled.button`
    width:calc(100% + 20px);
    margin-left:-10px;
    padding:10px 0;
    border-radius:0 0 5px 5px;
    color:#fff;
    font-size:15px;
    background-color:#000;
`
