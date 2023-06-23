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
    border: 2px solid #ffffff;
    font-size: 1.4rem;

    &>svg {
        color: ${(props) => props.theme[mode].text};  
        font-size: 1.7rem;
    }
`
