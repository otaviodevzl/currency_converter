import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 60px;
    background-color: #8ED943;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 800;
    color: #F2F2F2;
    transition: 250ms all;

    &:hover {
        transform: scale(1.1);
    }
`