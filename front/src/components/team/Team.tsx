import { Link, NavLink } from "react-router-dom"
import { TeamWrapper, TeamWrap, MemberWrap, MemberWrapper, NameWrap, ProfileWrap, ProfileImg, IconWrap } from "./styled"
import { Icon } from "@iconify/react"
import { useGetMode } from "@hooks/useMode"
import baek from "@img/baek.png"
import char from "@img/char.png"
import peng from "@img/peng.jpeg"
import pengTwo from "@img/pengTwo.png"

interface IMembers {
    teamPart: string
    name: string
    address: string
    blog: string
    profile: string
}

export const Team = () => {
    const [modeState, setChange] = useGetMode()

    const memberInfo: IMembers[] = [
        {
            teamPart: "TeamLeader",
            name: "100Space",
            address: "https://github.com/100space",
            blog: "https://baekspace.tistory.com",
            profile: baek,
        },
        {
            teamPart: "TeamMember",
            name: "char1ey",
            address: "https://github.com/char1ey95",
            blog: "https://char1ey.tistory.com",
            profile: char,
        },
        {
            teamPart: "TeamMember",
            name: "chop",
            address: "https://github.com/Kimsunghee3",
            blog: "https://chopssal.tistory.com",
            profile: peng,
        },
        {
            teamPart: "TeamMember",
            name: "cloudCoke",
            address: "https://github.com/cloudcoke",
            blog: "https://velog.io/@cloudcoke",
            profile: pengTwo,
        },
    ]

    const handleClick = (address: string): Window | null => {
        return window.open(address)
    }

    const homeClick = (blog: string): Window | null => {
        return window.open(blog)
    }

    return (
        <>
            <TeamWrapper style={{ overflow: "scroll" }}>
                {memberInfo.map((member, index) => (
                    <TeamWrap mode={modeState.mode} key={index}>
                        <div>
                            <MemberWrapper>
                                <MemberWrap>{member.teamPart}</MemberWrap>
                                <NameWrap>{member.name}</NameWrap>
                            </MemberWrapper>
                            <IconWrap>
                                <Icon
                                    onClick={() => handleClick(member.address)}
                                    style={{ fontSize: "3rem", color: "#fff", marginTop: "0rem" }}
                                    icon="ant-design:github-filled"
                                />
                                <Icon
                                    onClick={() => homeClick(member.blog)}
                                    style={{ fontSize: "3rem", color: "#fff", marginTop: "0rem" }}
                                    icon="ion:home-sharp"
                                />
                            </IconWrap>
                        </div>
                        <ProfileWrap>
                            <ProfileImg src={member.profile} alt="" />
                        </ProfileWrap>
                    </TeamWrap>
                ))}
            </TeamWrapper>
        </>
    )
}
