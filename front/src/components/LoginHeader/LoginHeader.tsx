
import { Backspace, Icons, LoginWrapper, IconWrap } from "@components/LoginHeader/styled/LoginHeader.styled"
import { walletInfo } from "@utils/interFace/styled.interface"

export const LoginImg = {
    one: require("@images/one.png"),
    two: require("@images/two.png"),
    three: require("@images/three.png"),
    four: require("@images/four.png"),
    check: require("@images/check.png"),
    line: require("@images/line.png"),
    afterLine: require("@images/afterLine.png"),
    backSpace: require("@images/backSpace.png")
}

export const AccountProduce = [
    {imgPath: LoginImg.one, content: "니모닉 생성"},
    {imgPath: LoginImg.two, content: "니모닉 확인"},
    {imgPath: LoginImg.three, content: "정보 입력"},
    {imgPath: LoginImg.four, content: "지갑 생성"},
]

export const LoadAccount = [
    {imgPath: LoginImg.one, content: "니모닉 입력"},
    {imgPath: LoginImg.two, content: "정보 입력"},
    {imgPath: LoginImg.three, content: "가져오기 완료"},
]

export const LoginHeader = () => {

    const renderWalletHeader = (walletArray:walletInfo[]) => {
        return(
            walletArray.map((v,index, array) => {
                return(
                    <>
                        <Icons src={v.imgPath} alt=""/>
                        {v.content}
                        {index === array.length-1 ? <></> : <Icons src={LoginImg.afterLine} alt=""/>}
                    </>
                )
            })
        )
    }
    return(
        <>
            <LoginWrapper>
                        <Backspace src={LoginImg.backSpace} alt="backSpace" />
                <IconWrap>
                    {renderWalletHeader(AccountProduce)}
                </IconWrap>
            </LoginWrapper>
        </>
    )
}
