import { MainRouter } from "routes"
import { BodyWrap, SideBar } from "./styled"
import { useRef, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { IsSideBar } from "@utils/localStorage"
import { Mypage } from "@common/myPage"

export const Body = () => {
    const sidebarstate = useRecoilValue(IsSideBar)
    // const BodyRef = useRef<HTMLDivElement | null>(null)
    // const [bottomCheck, setBottomCheck] = useState(false)
    // const handleScroll = () => {
    //     const divElement = BodyRef.current
    //     if (divElement) {
    //         const isAtBottom = divElement.scrollTop + divElement.clientHeight === divElement.scrollHeight
    //         if (isAtBottom) {
    //             setBottomCheck(!bottomCheck)
    //         }
    //     }
    // }
    console.log(sidebarstate)

    return (
        <>
            <BodyWrap
                // ref={BodyRef}
                // onScroll={handleScroll}
                // bottomcheck={bottomCheck.toString()}
                sidebarstate={sidebarstate.toString()}
            >
                <SideBar sidebarstate={sidebarstate.toString()}>
                    <Mypage />
                </SideBar>
                <MainRouter />
            </BodyWrap>
        </>
    )
}
