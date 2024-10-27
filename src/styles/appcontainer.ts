import styled from "styled-components";

export const AppContainerStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 12px;

    .titleContainer {
        position: absolute;
        margin-bottom: 275px;

        h1 {
            color: #fff;
            font-size: 30px;
            font-weight: 800;
        }
    }

    .buttonContainer {
        display: flex;
        flex-direction: column;
        position: absolute;
        margin-top: 250px;
        text-align: center;

        span {
            margin-top: 12px;
            color: #f2f2f2;
            font-size: 22px;
            font-weight: 600;
        }
    }
`