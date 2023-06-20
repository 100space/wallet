import styled from "styled-components"

const mode = "darkMode"

export const BtnWrap = styled.div`
    width: 5.6rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme[mode].text};  
    border-radius: 8px;
    border: 1px solid #1b1b1b;
    font-size: 1.3rem;

    &>svg {
        color: ${(props) => props.theme[mode].text};  
    }
`
