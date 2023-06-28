import styled from "styled-components"

export const WR = styled.div`
    width: 100%; 
    flex-direction: column;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
`

export const A = styled.img`
    position: relative;
    width: 12rem;
    height: 12rem;
    border-radius: 6.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 2rem;
    z-index: 1;
`

export const B = styled.input`
    background-color: #535353;
    width: 92%;
    height: 10rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    bottom: 3rem;
    border: none;
`

export const TotalSupplyWrap = styled.div`
    width: 92%;
    height: 14rem;
    margin-bottom: 2px;
`

export const NftCardWrap = styled.div`
    width: 92%;
    height: 10;
`