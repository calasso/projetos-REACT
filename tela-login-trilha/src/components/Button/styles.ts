import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &:disabled{
        background-color:#d9c1e1;
        color:#bc90cb;
        border: 1px solid #bbcad3;
        cursor: default;
        opacity: 0.6;
    }
`
