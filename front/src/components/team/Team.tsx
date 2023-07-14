import { Link, NavLink } from "react-router-dom";
import { TeamWrapper, TeamWrap, MemberWrap, MemberWrapper, NameWrap, ProfileWrap, ProfileImg } from "./styled"
import { Icon } from '@iconify/react';
import { useGetMode } from "@hooks/useMode";
import baek from "@img/baek.png"
import char from "@img/char.png"
import peng from "@img/peng.jpeg"
import pengTwo from "@img/pengTwo.png"

interface IMembers{
    teamPart: string;
    name: string;
    address: string;
    profile: string;
}

export const Team = () => {
    const [modeState, setChange] = useGetMode()

    const memberInfo: IMembers[] = [
        {teamPart: "TeamLeader", name: "100Space", address: "https://github.com/100space", profile: baek },
        {teamPart: "TeamMember", name: "char1ey", address: "https://github.com/char1ey95", profile: char},
        {teamPart: "TeamMember", name: "chop", address: "https://github.com/Kimsunghee3", profile: peng},
        {teamPart: "TeamMember", name: "cloudCoke", address: "https://github.com/cloudcoke", profile: pengTwo},
    ]

    const handleClick = (address: string) => {
        window.location.href = address
    }

    return(
        <>
            <TeamWrapper style={{overflow: "scroll"}}>
                {memberInfo.map((member, index) => (
                    <TeamWrap mode={modeState.mode} key={index} >
                        <div>
                            <MemberWrapper>
                                <MemberWrap>{member.teamPart}</MemberWrap>
                                <NameWrap>{member.name}</NameWrap>
                                <div style={{color: "white", fontSize: "1.4rem", marginBottom: "0.1rem"}}>{member.address}</div>
                            </MemberWrapper>
                            <Icon onClick={() => handleClick(member.address)} style={{fontSize: "4rem", color: "#fff", marginTop: "0rem"}} icon="ant-design:github-filled" />    
                        </div>
                        <ProfileWrap>
                            <ProfileImg src={member.profile}  alt=""/>
                        </ProfileWrap>
                    </TeamWrap>
                ))}
            </TeamWrapper>
        </>
    )
}