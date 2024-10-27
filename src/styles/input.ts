import styled from "styled-components";

export const Input = styled.input`
    width: 280px;
    height: 40px;
    border: none;
    padding: 10px;
    text-align: center;
    border-radius: 6px;
    margin-bottom: 12px;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    outline: none;

    &::-webkit-outer-spin-button, 
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &::placeholder {
        font-size: 16px;
        color: #000;
    }
`