import { IStateProps } from "@utils/interFace/styled.interface"
import styled, { css } from "styled-components"

interface BottomCheck extends IStateProps {
    bottomcheck?: string
}
export const BodyWrap = styled.div<BottomCheck>`
    width: 100%;
    padding: 1rem 3rem;
    height: 100%;
    /* position: relative; */
    overflow-y: ${({ sidebarstate }) => (sidebarstate === "true" ? "hidden" : "scroll")};
`
export const SideBar = styled.div<IStateProps>`
    width: 85%;
    height: calc(91.5% - 6rem);
    position: absolute;
    top: 8.5%;
    left: ${({ sidebarstate }) => (sidebarstate === "true" ? "0%" : "-100%")};
    background: white;
    z-index: 30;
    transition: all 0.5s ease-in-out;
    display: flex;
    box-shadow: 0 6px 20px -15px #000;
    border-width: 1px 1px 0 0;
    border-color: #cfcfcf;
    &::after {
        content: "";
        backdrop-filter: blur(5px);
        width: 15%;
        transition: all 0.5s ease-in-out;
        right: ${({ sidebarstate }) => (sidebarstate === "true" ? "-15%" : "10%")};
        height: 100%;
        position: absolute;
        z-index: 25;
    }
`
