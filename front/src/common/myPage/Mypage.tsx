import { TotalSupply } from "@components/TotalSupply"
import { MypageWrapper, MyProfile, MyNickName, TotalSupplyWrap } from "./styled"
import { NftCard } from "@components/Nft/NftCard"
import { INFTCard } from "@utils/interFace/nft.interface"
import { Btn } from "@components/Button"
import profile from "@img/profile.png"
import { useGetMode } from "@hooks/useMode"
import { MyProfileWrap } from "./MyProfileWrap"

const data: INFTCard = {
    name: "NONGDAMGOM",
    image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
    owner: "Char1ey",
    prices: [
        { currency: "KRW", price: 4500 },
        { currency: "ETH", price: 0.0005 },
    ],
}

export const Mypage = () => {
    const [modeState, setChange] = useGetMode()
    const handleButtonClick = (e: MouseEvent) => {}
    return (
        <>
            <MypageWrapper mode={modeState.mode}>
                {/* <MyProfileWrap>
                    <MyProfile src={profile} type="file" accept="image/*"/>
                </MyProfileWrap> */}
                {<MyProfileWrap/>}
                <MyNickName placeholder="NickName" />
                <TotalSupplyWrap>
                    <TotalSupply />
                </TotalSupplyWrap>
                {/* <div className="btnWrap"> */}
                <Btn
                    backgroundcolor="#fff"
                    width="80%"
                    height="5rem"
                    margin=""
                    mode=""
                    onClick={() => handleButtonClick}
                    fontSize="1.7rem"
                    profile={"true"}
                    color="black"
                >
                    계정 잠금
                </Btn>
                <Btn
                    backgroundcolor="#fff"
                    width="80%"
                    height="5rem"
                    margin=""
                    mode=""
                    onClick={() => handleButtonClick}
                    fontSize="1.7rem"
                    profile={"true"}
                    color="red"
                >
                    계정 삭제
                </Btn>
                {/* </div> */}
            </MypageWrapper>
        </>
    )
}
