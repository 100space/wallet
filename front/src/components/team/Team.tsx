import { Link, NavLink } from "react-router-dom";
import { TeamWrapper, ChopWrapper, ChopWrap, NickNameWrap } from "./styled"
import { Icon } from '@iconify/react';
import { useGetMode } from "@hooks/useMode";
import usagi from "@img/usagi.png"

export const Team = () => {
    const [modeState, setChange] = useGetMode()

    const memberInfo = [
        {name: "100Space", address: "https://github.com/100space"},
        {name: "char1ey", address: "https://github.com/char1ey95"},
        {name: "chop", address: "https://github.com/Kimsunghee3"},
        {name: "cloudCoke", address: "https://github.com/cloudcoke"},
    ]

    const chopClick = () => {
        window.location.href = "https://github.com/Kimsunghee3"
    }

    return(
        <>
            <TeamWrapper>
                <ChopWrapper>
                    <ChopWrap>
                        <NickNameWrap mode={modeState.mode} style={{color: "white"}}>chop</NickNameWrap>
                        <Icon onClick={chopClick} style={{fontSize: "4rem", marginTop: "2rem"}} icon="ant-design:github-filled" />
                    </ChopWrap>
                    <div style={{width:"15rem", height:"15rem", display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>
                        <img style={{borderRadius: "1rem", width: "15rem", height: "15rem"}} src={usagi} alt="" />
                    </div>
                </ChopWrapper>
                <ChopWrapper>
                    <NickNameWrap mode={modeState.mode} style={{color: "white"}}>chop</NickNameWrap>
                    <Icon onClick={chopClick} style={{fontSize: "4rem"}} icon="ant-design:github-filled" />
                </ChopWrapper>
                <ChopWrapper>
                    <NickNameWrap mode={modeState.mode} style={{color: "white"}}>chop</NickNameWrap>
                    <Icon onClick={chopClick} style={{fontSize: "4rem"}} icon="ant-design:github-filled" />
                </ChopWrapper>
                <ChopWrapper>
                    <NickNameWrap mode={modeState.mode} style={{color: "white"}}>chop</NickNameWrap>
                    <Icon onClick={chopClick} style={{fontSize: "4rem"}} icon="ant-design:github-filled" />
                </ChopWrapper>
            </TeamWrapper>
        </>
    )
}