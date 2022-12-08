import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    border: solid 1px #30363d;


    h3{
        font-size: 32px;
        color: #FAFAFA;
        margin: 10px 10px 10px 105px;

    }

    p{
        font-size:16px;
        color: #8b949e;
        margin: 10px 10px 30px 105px;
    }

    a{
        padding: 10px 30px;
        color: #FFFFFF;
        font-size: inherit;
        background: transparent;
        width: 100%;
        height: 62px;
        border: 1px solid #30363d;
        background-color: #238636;
        text-decoration: none;
        margin: 10px 10px;

    }

    a.remover{
        color: #f78166;
        margin: 10px;
        background-color: #21262d;
    }

    hr{
        color: #FAFAFA60;
        margin: 10px 0;
        border: transparent
    }

    .div-img{
        float: left;
    }
    img {
        padding: 10px;
        border-radius: 50%;
        width: 75px;
        height: auto;
    }
`
