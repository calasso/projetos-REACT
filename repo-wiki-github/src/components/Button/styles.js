import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #21262d;
    border: 1px solid;
    border-radius: 6px;
    height: 62px;
    width: 80%;
    margin: 20px;
    color: #c9d1d9;
    font-size:16px;
    font-weight: bold;
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color;
    box-shadow: 0 0 transparent;

    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #30363d;
        border-color: #8b949e;
        transition-duration: .1s;
    }
`
